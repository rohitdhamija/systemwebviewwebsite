define('app-flow',[], function () {
  'use strict';

  var AppModule = function AppModule() {};

  return AppModule;
});

define('text!app-flow.json',[],function () { return '{\n    "defaultPage": "shell",\n    "types": {\n    },\n    "variables": {\n    },\n    "security": {\n        "access": {\n            "requiresAuthentication": false\n        }\n    },\n    "applicationModelVersion": "19.1.3",\n    "chains": {\n    },\n    "translations": {\n        "app": {\n            "path": "./resources/strings/app/nls/app-strings"\n        }\n    },\n    "description": "A new VB app",\n    "id": "starter",\n    "services": {\n    },\n    "userConfig": {\n        "configuration": {\n            "idcsInfo": {\n                "hostName": "https://idcs-3a3787031c68450297dba80e8ba8071f.identity.oraclecloud.com:443",\n                "clientId": "994a307669f440c0aaddb7e0f890d87e",\n                "oAuthRedirectEndpoint": "https://intoraic-vbdemo.integration.ocp.oraclecloud.com:443/ic/builder/rt/helloworldrdh/1.0/webApps/frontpage/",\n                "allowedScopes": [\n                    "https://sytestidmfed1cdc-test.fs.us2.oraclecloud.com:443/",\n                    "https://sytestidmfed1cdc-test.fs.us2.oraclecloud.com/",\n                    "https://69F87263C9CA4B1D984F6029EEF418F1.integration.ocp.oraclecloud.com:443urn:opc:resource:consumer::all"\n                ]\n            },\n            "url": "https://intoraic-vbdemo.integration.ocp.oraclecloud.com:443/ic/builder/rt/helloworldrdh/1.0/_currentuser",\n            "authentication": {\n                "type": "none"\n            }\n        },\n        "type": "vb/DefaultSecurityProvider"\n    }\n}';});

define('flows/main/main-flow',[], function() {
  'use strict';

  var FlowModule = function FlowModule() {};

  return FlowModule;
});

define('text!flows/main/main-flow.json',[],function () { return '{\n    "flowModelVersion": "19.1.3",\n    "id": "main",\n    "description": "Flow main",\n    "defaultPage": "main-start",\n    "chains": {},\n    "services": {},\n    "types": {},\n    "variables": {}\n}';});


define('text!flows/main/pages/main-start-page.html',[],function () { return '<div class="oj-flex">\n    <h1 id="h1-605161890-1" class="oj-flex-item oj-sm-12 oj-md-12">This is front page. Hello to VBCS !</h1>\n</div>\n';});

define('flows/main/pages/main-start-page',[], function() {
  'use strict';

  var PageModule = function PageModule() {};

  return PageModule;
});


define('text!flows/main/pages/main-start-page.json',[],function () { return '{\n  "pageModelVersion": "19.1.3",\n  "title": "",\n  "description": "",\n  "variables": {},\n  "types": {},\n  "chains": {},\n  "eventListeners": {},\n  "imports": {}\n}\n';});

define('pages/resources/strings/shell/nls/root/shell-strings',[],function() {
  'use strict';

  return {
  "shell_header_title" : "My Application",
  "shell_footer_about_link" : "About",
  "shell_footer_copyright" : "Created with Visual Builder, Copyright © 2018",
  "shell_title_tooltip" : "Application Name",
  "shell_sign_out" : "Sign Out"
};
});
define('pages/resources/strings/shell/nls/shell-strings',[],function() {
  'use strict';

  return {
  "root" : true
};
});

define('text!pages/shell-page.html',[],function () { return '<div id="page" class="oj-web-applayout-page">\n  <header role="banner" class="oj-web-applayout-header">\n    <div class="oj-web-applayout-max-width oj-flex-bar oj-sm-align-items-center">\n      <div class="oj-flex-bar-middle oj-sm-align-items-baseline">\n        <!-- Logo can go here -->\n        <!--img src="" alt="Company Logo"></img-->\n        <h1 class="oj-sm-only-hide oj-web-applayout-header-title" :title="[[ $page.translations.shell.shell_title_tooltip ]]">\n          <oj-bind-text value="[[ $page.translations.shell.shell_header_title ]]"></oj-bind-text>\n        </h1>\n      </div>\n      <div class="oj-flex-bar-end">\n        <oj-toolbar id="toolbar1">\n          <oj-menu-button id="userMenu" display="[[$application.responsive.SM_ONLY === false ? \'icons\' : \'all\']]" chroming="half">\n            <oj-bind-text value="[[ $application.user.email ]]"></oj-bind-text>\n            <span slot="endIcon" css="oj-component-icon oj-button-menu-dropdown-icon"></span>\n            <oj-menu slot="menu" id="menu1" style="display:none">\n              <oj-option id="out" value="out"><oj-bind-text value="[[ $page.translations.shell.shell_sign_out ]]"></oj-bind-text></oj-option>\n            </oj-menu>\n          </oj-menu-button>\n        </oj-toolbar>\n      </div>\n    </div>\n  </header>\n\n  <!-- for message notifications -->\n  <oj-messages id="vbDefaultNotifier" position="{}" display="general" messages="{{$page.variables.messagesADP}}" on-oj-close="{{$listeners.onMessageClose}}"></oj-messages>\n\n  <div class="oj-web-applayout-content-nopad oj-web-spacing oj-web-applayout-max-width">\n    <div class="oj-web-applayout-content oj-flex oj-flex-items-pad">\n      <!-- Where Visual Pages will be rendered -->\n      <oj-vb-content id="vbRouterContent" class="vbcs-pages-module oj-flex-item" config="[[vbRouterFlow]]"></oj-vb-content>\n    </div>\n  </div>\n  <footer class="oj-web-applayout-footer" role="contentinfo">\n    <div class="oj-web-applayout-footer-item oj-web-applayout-max-width">\n      <ul>\n        <li><a id="about" href=""><oj-bind-text value="[[ $page.translations.shell.shell_footer_about_link ]]"></oj-bind-text></a></li>\n      </ul>\n    </div>\n    <div class="oj-web-applayout-footer-item oj-text-secondary-color oj-text-sm oj-web-applayout-max-width"><oj-bind-text value="[[ $page.translations.shell.shell_footer_copyright ]]"></oj-bind-text></div>\n  </footer>\n</div>\n';});

define('pages/shell-page',[], function() {
  'use strict';

  var PageModule = function PageModule() {};

  return PageModule;
});

define('text!pages/shell-page.json',[],function () { return '{\n  "pageModelVersion": "19.1.3",\n  "description": "",\n  "routerFlow": "main",\n  "variables": {\n    "messagesADP": {\n      "type": "vb/ArrayDataProvider",\n      "defaultValue": {\n        "idAttribute": "id",\n        "itemType": "page:messageType"\n      }\n    }\n  },\n  "types": {\n    "messageType": {\n      "id": "string",\n      "severity": "string",\n      "category": "string",\n      "summary": "string",\n      "detail": "string",\n      "timestamp": "string",\n      "autoTimeout": "number"\n    }\n  },\n  "chains": {\n    "showNotification": {\n      "variables": {\n        "eventPayload": {\n          "type": "page:messageType",\n          "input": "fromCaller"\n        }\n      },\n      "root": "displayMessage",\n      "actions": {\n        "displayMessage": {\n          "module": "vb/action/builtin/fireDataProviderEventAction",\n          "parameters": {\n            "target": "{{ $page.variables.messagesADP }}",\n            "add": {\n              "data": "{{ [ $chain.variables.eventPayload ] }}"\n            }\n          }\n        }\n      }\n    },\n    "closeNotificationHandler": {\n      "variables": {\n        "eventMessage": {\n          "type": "page:messageType",\n          "input": "fromCaller"\n        }\n      },\n      "root": "removeMessage",\n      "actions": {\n        "removeMessage": {\n          "module": "vb/action/builtin/fireDataProviderEventAction",\n          "parameters": {\n            "target": "{{ $page.variables.messagesADP }}",\n            "remove": {\n              "keys": "{{ [ $variables.eventMessage.id ] }}"\n            }\n          }\n        }\n      }\n    }\n  },\n  "eventListeners": {\n    "vbNotification": {\n      "chains": [\n        {\n          "chainId": "showNotification",\n          "parameters": {\n            "eventPayload": "{{ { id: $event.key, summary: $event.summary, detail: $event.message, category: $event.type, severity: $event.type, autoTimeout: $event.displayMode === \'transient\' ? 0 : -1, timestamp: oj.IntlConverterUtils.dateToLocalIso(new Date()) } }}"\n          }\n        }\n      ]\n    },\n    "onMessageClose": {\n      "chains": [\n        {\n          "chainId": "closeNotificationHandler",\n          "parameters": {\n            "eventMessage": "{{ $event.detail.message }}"\n          }\n        }\n      ]\n    }\n  },\n  "imports": {\n    "components": {\n      "oj-messages": {\n        "path": "ojs/ojmessages"\n      },\n      "oj-menu": {\n        "path": "ojs/ojmenu"\n      },\n      "oj-menu-button": {\n        "path": "ojs/ojbutton"\n      },\n      "oj-option": {\n        "path": "ojs/ojoption"\n      },\n      "oj-toolbar": {\n        "path": "ojs/ojtoolbar"\n      }\n    }\n  },\n  "translations": {\n    "shell": {\n      "path": "./resources/strings/shell/nls/shell-strings"\n    }\n  }\n}';});


define('css!resources/css/app',[],function(){});
define('resources/strings/app/nls/app-strings',[],function() {
  'use strict';

  return {
  "root" : true
};
});
define('resources/strings/app/nls/root/app-strings',[],function() {
  'use strict';

  return { };
});

define('text!settings/configuration.json',[],function () { return '{\n    "embedding": "deny",\n    "authentication": {\n        "oauthFlow": "none"\n    }\n}';});


define('text!settings/dependencies.json',[],function () { return '{\n    "component-dependencies": {\n    }\n}';});


//# sourceMappingURL=vb-app-bundle.js.map