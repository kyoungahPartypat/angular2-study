"use strict";
var router_1 = require('@angular/router');
var member_component_1 = require('./component/member.component');
var video_component_1 = require('./component/video.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/members',
        pathMatch: 'full'
    },
    {
        path: 'members',
        component: member_component_1.MemberComponent
    },
    {
        path: 'video',
        component: video_component_1.VideoComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map