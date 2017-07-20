<%--
  Created by IntelliJ IDEA.
  User: wanggb
  Date: 2016/7/1
  Time: 16:26
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%
    String contextPath = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + contextPath + "/";
%>

<!DOCTYPE html>
<html lang="en" >
<head>
    <meta charset="utf-8" />
    <title>前端平台|业务审批</title>
    <meta name="description" content="Angularjs, Html5, Music, Landing, 4 in 1 ui kits package" />
    <meta name="keywords" content="AngularJS, angular, bootstrap, admin, dashboard, panel, app, charts, components,flat, responsive, layout, kit, ui, route, web, app, widgets" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />


    <%--less.js配置--%>
    <script>
        less = {relativeUrls: true, dumpLineNumbers:"all"};
    </script>
    <link rel="stylesheet/less" type="text/css" href="main.less" />
    <script src="framework/library/less/less.js" type="text/javascript" data-env="development"></script>
</head>

<body ng-controller="AppCtrl">
<div class="app" id="app" ng-class="{'app-header-fixed':app.settings.headerFixed, 'app-aside-fixed':app.settings.asideFixed, 'app-aside-folded':app.settings.asideFolded, 'app-aside-dock':app.settings.asideDock, 'container':app.settings.container}" ui-view></div>
<script src="framework/library/require/require.js" data-main="main"></script>
</body>
</html>
