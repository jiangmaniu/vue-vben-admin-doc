# 权限

项目中集成了两种权限处理方式：

1. 通过用户角色来过滤菜单(前端方式控制)

2. 通过后台来动态生成路由表(后台方式控制)


## 前端角色权限方式


::: tip
该方式实现的原理是在前端固定写死路由的权限，指定路由有哪些权限可以查看，一开始只初始化通用的路由，需要权限才能访问的路由没有被加入路由表内，在登陆后或者其他方式获取用户角色后，通过角色去遍历路由表，获取该角色可以访问的路由表，生成路由表，在通过 router.addRoutes 添加到路由实例，实现权限的过滤
:::

::: warning 缺点
权限相对不自由，如果后台改动角色，前台也需要跟着改动。适合角色较固定的系统
:::

### 实现流程

1. 在[项目配置](./setting.md#项目配置)将系统内权限模式改为 ROLE模式

```ts

// ! 改动后需要清空浏览器缓存
const setting: ProjectConfig = {
  // 权限模式
  permissionMode: PermissionModeEnum.ROLE,
}
```

2. 在路由表配置路由所需的权限，如果不配置，默认可见(见注释)

```ts
import type { AppRouteModule } from '/@/router/types';

import { PAGE_LAYOUT_COMPONENT } from '/@/router/constant';
import { RoleEnum } from '/@/enums/roleEnum';

export default {
  layout: {
    path: '/permission',
    name: 'Permission',
    component: PAGE_LAYOUT_COMPONENT,
    redirect: '/permission/front/page',
    meta: {
      icon: 'carbon:user-role',
      title: '权限管理',
    },
  },

  routes: [
    {
      path: '/front',
      name: 'PermissionFrontDemo',
      meta: {
        title: '基于前端权限',
      },
      children: [
        {
          path: 'auth-pageA',
          component: () => import('/@/views/demo/permission/front/AuthPageA.vue'),
          meta: {
            title: '权限测试页A',
             // 这里可以配置哪些角色可以访问
            roles: [RoleEnum.SUPER],
          },
        },
        {
          path: 'auth-pageB',
          component: () => import('/@/views/demo/permission/front/AuthPageB.vue'),
          meta: {
            title: '权限测试页B',
             // 这里可以配置哪些角色可以访问
            roles: [RoleEnum.TEST],
          },
        },
      ],
    },
  ],
} as AppRouteModule;
```

3. 在路由钩子内动态判断

详细代码见 [/@/router/guard/permissionGuard.ts](https://github.com/anncwb/vue-vben-admin/tree/main/src/router/guard/permissionGuard.ts)

```ts
// 这里只列举了主要代码
export function createPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const routes = await permissionStore.buildRoutesAction();
    routes.forEach((route) => {
      router.addRoute(RootRoute.name!, route as RouteRecordRaw);
    });
    const redirectPath = (from.query.redirect || to.path) as string;
    const redirect = decodeURIComponent(redirectPath);
    const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };
    permissionStore.commitDynamicAddedRouteState(true);
    next(nextData);
  });
}
```
**permissionStore.buildRoutesAction**

**过滤动态路由**
详细代码见 [/@/store/modules/permission.ts](https://github.com/anncwb/vue-vben-admin/tree/main/src/store/modules/permission.ts)

```ts
// 主要代码
if (permissionMode === PermissionModeEnum.ROLE) {
    // 遍历动态路由，过滤出符合条件的路由
      routes = filter(asyncRoutes, (route) => {
        const { meta } = route;
        const { roles } = meta!;
        if (!roles) return true;
        return roleList.some((role) => roles.includes(role));
      });
}
```

### 动态更换角色

系统提供[usePermission](https://github.com/anncwb/vue-vben-admin/tree/main/src/hooks/web/usePermission.ts)方便角色相关操作

```ts
import { usePermission } from '/@/hooks/web/usePermission';
import { RoleEnum } from '/@/enums/roleEnum';

 export default defineComponent({
    setup() {
      const { changeRole } = usePermission();
      // 更换为test角色
      // 动态更改角色，传入角色名称，可以是数组
      changeRole(RoleEnum.TEST)
      return {};
    },
  });
```

### 细粒度权限

**函数方式**

[usePermission](https://github.com/anncwb/vue-vben-admin/tree/main/src/hooks/web/usePermission.ts)还提供了按钮级别的权限控制。


```vue
<template>
 <a-button v-if="hasPermission([RoleEnum.TEST, RoleEnum.SUPER])" color="error" class="mx-4">
      拥有[test,super]角色权限可见
  </a-button>
</template>
<script lang="ts">
import { usePermission } from '/@/hooks/web/usePermission';
import { RoleEnum } from '/@/enums/roleEnum';

 export default defineComponent({
    setup() {
      const { hasPermission } = usePermission();

      return {hasPermission};
    },
  });
</script>
```

**组件方式**

具体查看[权限组件使用](/comp/auth)


**指令方式**

::: tip

指令方式不能动态更改权限
:::


```html
<a-button v-auth="RoleEnum.SUPER" type="primary" class="mx-4"> 拥有super角色权限可见</a-button>

```


## 后台动态获取菜单
::: tip
该方式的实现原理是通过后台动态生成路由表，且遵循一定的结构返回给前端，如果不是前端需要自行转化为可识别的结构，在通过 router.addRoutes 添加到路由实例，实现权限的动态生成
:::

### 实现流程

1. 在[项目配置](./setting.md#项目配置)将系统内权限模式改为`BACK`模式

```ts

// ! 改动后需要清空浏览器缓存
const setting: ProjectConfig = {
  // 权限模式
  permissionMode: PermissionModeEnum.BACK,
}
```

2. 路由拦截，与角色权限模式一致

**permissionStore.buildRoutesAction**

**过滤动态路由**
详细代码见 [/@/store/modules/permission.ts](https://github.com/anncwb/vue-vben-admin/tree/main/src/store/modules/permission.ts)

```ts
// 主要代码
if (permissionMode === PermissionModeEnum.BACK) {
      // 这里获取后台路由菜单逻辑自行修改
      const paramId = id || userStore.getUserInfoState.userId;
      let routeList: any[] = await getMenuListById({ id: paramId });
      // 动态引入组件
      routeList = transformObjToRoute(routeList);
      //  后台路由转菜单结构
      const backMenuList = transformRouteToMenu(routeList);
      this.commitBackMenuListState(backMenuList);
      // 生成路由
      routes = genRouteModule(routeList) as AppRouteRecordRaw[];
      routes.push(REDIRECT_ROUTE);
    }
    return routes;
  }
```

**getMenuListById返回值格式**

返回值是有多个路由模块所组成

```ts
[{
  layout: {
    path: '/dashboard',
    name: 'Dashboard',
    component: 'PAGE_LAYOUT',
    redirect: '/dashboard/welcome',
    meta: {
      icon: 'ant-design:home-outlined',
      title: 'Dashboard',
    },
  },
  routes: [
    {
      path: '/welcome',
      name: 'Welcome',
      component: '/dashboard/welcome/index.vue',
      meta: {
        title: '欢迎页',
        affix: true,
      },
    },
  ],
};]
```


### 动态更换菜单

系统提供[usePermission](https://github.com/anncwb/vue-vben-admin/tree/main/src/hooks/web/usePermission.ts)方便角色相关操作

```ts
import { usePermission } from '/@/hooks/web/usePermission';
import { RoleEnum } from '/@/enums/roleEnum';

 export default defineComponent({
    setup() {
      const { changeMenu } = usePermission();

      // 更改菜单的实现需要自行去修改
      changeMenu()
      return {};
    },
  });
```

### 细粒度权限

**函数方式**

[usePermission](https://github.com/anncwb/vue-vben-admin/tree/main/src/hooks/web/usePermission.ts)还提供了按钮级别的权限控制。


```vue
<template>
 <a-button v-if="hasPermission(['20000','2000010'])" color="error" class="mx-4">
      拥有[20000,2000010]code可见
  </a-button>
</template>
<script lang="ts">
import { usePermission } from '/@/hooks/web/usePermission';
import { RoleEnum } from '/@/enums/roleEnum';

 export default defineComponent({
    setup() {
      const { hasPermission } = usePermission();
      return {hasPermission};
    },
  });
</script>
```
**组件方式**

具体查看[权限组件使用](/comp/auth)

**指令方式**

::: tip

指令方式不能动态更改权限
:::


```html
<a-button v-auth="'1000'" type="primary" class="mx-4">
拥有code ['1000']权限可见
</a-button>
```

### 如何初始化 code

一般如果需要做按钮级别权限。后台会提供相应的code。或者类型的判断标识

一般获取这些编码只需要在登录后获取一次即可。


```ts
  import { getPermCodeByUserId } from '/@/api/sys/user';
  import { permissionStore } from '/@/store/modules/permission';
 async function changePermissionCode(userId: string) {
       // 从后台获取当前用户拥有的编码
        const codeList = await getPermCodeByUserId({ userId });
        permissionStore.commitPermCodeListState(codeList);
}
```