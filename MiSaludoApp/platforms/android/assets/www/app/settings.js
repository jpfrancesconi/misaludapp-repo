/**************|
 * Development |
 **************/

// Uncomment to clear the app's local storage cache each time the app loads.
//window.localStorage.clear();

// Set to true to see console.log() messages. Set to false when publishing app.
Drupal.settings.debug = false;

/****************************************|
 * Drupal Settings (provided by jDrupal) |
 ****************************************/
 
/* Drupal Paths */
 
// Site Path (do not use a trailing slash)
//Drupal.settings.site_path = 'http://misaludapp.ddns.net/misaludapp/'; // e.g. http://www.example.com
Drupal.settings.site_path = 'http://misaludapp.ddns.net/misaludapp/';

// Default Services Endpoint Path
Drupal.settings.endpoint = 'drupalgap';

// Files Directory Paths (use one or the other)
Drupal.settings.file_public_path = 'sites/default/files';
//Drupal.settings.file_private_path = 'system/files';

// The Default Language Code
Drupal.settings.language_default = 'und';

/* Drupal Caching */

// Set to true to enable local storage caching.
Drupal.settings.cache.entity.enabled = false;
Drupal.settings.cache.views.enabled = false;

// Number of seconds before cached copy expires. Set to 0 to cache forever, set
// to 60 for one minute, etc.
Drupal.settings.cache.entity.expiration = 3600;
Drupal.settings.cache.views.expiration = 3600;


/*********************|
 * DrupalGap Settings |
 *********************/

// DrupalGap Mode (defaults to 'web-app')
//  'web-app' - use this mode to build a web application for a browser window
//  'phonegap' - use this mode to build a mobile application with phonegap
drupalgap.settings.mode = 'web-app';

/*************|
 * Appearance |
 *************/

// App Title
drupalgap.settings.title = 'MiSaludApp';
 
// App Front Page
drupalgap.settings.front = 'dashboard';

// Theme
drupalgap.settings.theme = 'easystreet3';

// Logo
drupalgap.settings.logo = 'themes/easystreet3/images/logo_ministerio.jpg';

//Offline Warning Message. Set to false to hide message.
drupalgap.settings.offline_message = 'Servidor fuera de l&iacute;nea!';

// Exit app message.
drupalgap.settings.exit_message = 'Desea salir de ' + drupalgap.settings.title + '?';

// Loader Animations - http://demos.jquerymobile.com/1.4.0/loader/
drupalgap.settings.loader = {
		  loading: {
		    text: 'Cargando...',
		    textVisible: true,
		    theme: 'b'
		  },
		  saving: {
		    text: 'Guardando...',
		    textVisible: true,
		    theme: 'b'
		  },
		  deleting: {
		    text: 'Eliminando...',
		    textVisible: true,
		    theme: 'b'
		  }
		};

/*****************************************|
 * Modules - http://drupalgap.org/node/74 |
 *****************************************/

/** Contributed Modules - www/app/modules **/

//Drupal.modules.contrib['example'] = {};
Drupal.modules.contrib['addressfield'] = {};
Drupal.modules.contrib['geofield'] = {};

/** Custom Modules - www/app/modules/custom **/
//Drupal.modules.custom['my_module'] = {};
Drupal.modules.custom['mapa'] = {};
Drupal.modules.custom['mobile_notifications'] = {};
Drupal.modules.custom['push_notifications'] = {};

/***************************************|
 * Menus - http://drupalgap.org/node/85 |
 ***************************************/
drupalgap.settings.menus = {}; // Do not remove this line.

// User Menu Anonymous
drupalgap.settings.menus['user_menu_anonymous'] = {
  options: menu_popup_get_default_options(),
  links: [
    {
      title: 'Login',
      path: 'user/login',
      options: {
        attributes: {
          'data-icon': 'lock'
        }
      }
    },
    {
      title: 'Create new account',
      path: 'user/register',
      options: {
        attributes: {
          'data-icon': 'plus'
        }
      }
    },
    {
    	title:'Notificacion',
    	path:'mobile-notifications',
    	options:{
    		reloadPage:true,
    		attributes:{ 'data-icon':'info' }
    	}
    }
  ]
};

// User Menu Authenticated
drupalgap.settings.menus['user_menu_authenticated'] = {
  options: menu_popup_get_default_options(),
  links: [
    {
      title: 'My Account',
      path: 'user',
      options: {
        attributes: {
          'data-icon': 'user'
        }
      }
    },
    {
      title: 'Logout',
      path: 'user/logout',
      options: {
        attributes: {
          'data-icon': 'delete'
        }
      }
    },
    {
    	title:'Notificacion',
    	path:'mobile-notifications',
    	options:{
    		reloadPage:true,
    		attributes:{ 'data-icon':'info' }
    	}
    }
  ]
};

// Main Menu
drupalgap.settings.menus['main_menu'] = {
  options: menu_popup_get_default_options(),
  links: [
    {
      title:'Content',
      path:'node',
      options:{
        attributes:{
          'data-icon':'star'
        }
      }
    },
    {
      title:'Taxonomy',
      path:'taxonomy/vocabularies',
      options:{
        attributes:{
          'data-icon':'grid'
        }
      }
    },
    {
      title:'Users',
      path:'user-listing',
      options:{
        attributes:{
          'data-icon':'info'
        }
      }
    }
  ]
};

/****************************************|
 * Blocks - http://drupalgap.org/node/83 |
 ****************************************/
drupalgap.settings.blocks = {}; // Do not remove this line.

// Easy Street 3 Theme Blocks
drupalgap.settings.blocks.easystreet3 = {
  header: {
    user_menu_anonymous: {
      roles: {
        value: ['anonymous user'],
        mode: 'include',
      }
    },
    user_menu_authenticated: {
      roles: {
        value: ['authenticated user'],
        mode: 'include',
      }
    },
    main_menu: { }
  },
  sub_header: {
    title: { }
  },
  navigation: {
    primary_local_tasks: { }
  },
  content: {
    messages: { },
    main: { }
  },
  footer: {
    powered_by: { }
  }
};

/****************************************************|
 * Region Menu Links - http://drupalgap.org/node/173 |
 ****************************************************/
drupalgap.settings.menus.regions = {}; // Do not remove this line.

// Header Region Links
drupalgap.settings.menus.regions['header'] = {
  links:[
    /* Main Menu Popup Menu Button */
    {
      options: {
        popup: true,
        popup_delta: 'main_menu',
        attributes: {
          'class': 'ui-btn-left',
          'data-icon': 'bars'
        }
      }
    },
    /* Home Button */
    {
      path: '',
      options: {
        attributes: {
          'data-icon': 'home',
          'data-iconpos': 'notext',
          'class': 'ui-btn-left'
        }
      },
      pages: {
        value: [''],
        mode: 'exclude'
      }
    },
    /* Anonymous User Popup Menu Button */
    {
      options: {
        popup: true,
        popup_delta: 'user_menu_anonymous',
        attributes: {
          'class': 'ui-btn-right',
          'data-icon': 'user'
        }
      },
      roles: {
        value: ['anonymous user'],
        mode: 'include',
      }
    },
    /* Authenticated User Popup Menu Button */
    {
      options: {
        popup: true,
        popup_delta: 'user_menu_authenticated',
        attributes: {
          'class': 'ui-btn-right',
          'data-icon': 'user'
        }
      },
      roles: {
        value: ['authenticated user'],
        mode: 'include',
      }
    }
  ]
};

// Footer Region Links
drupalgap.settings.menus.regions['footer'] = {
  links: [
    /* Back Button */
    {
      options: {
        attributes: {
          'data-icon': 'back',
          'data-iconpos': 'notext',
          'class': 'ui-btn-right',
          'onclick': 'javascript:drupalgap_back();'
        }
      },
      pages: {
        value: [''],
        mode: 'exclude'
      }
    }
  ]
};

/*********|
 * Camera |
 **********/
drupalgap.settings.camera = {
  quality: 50
};

/***********************|
 * Performance Settings |
 ***********************/
drupalgap.settings.cache = {}; // Do not remove this line.

// Theme Registry - Set to true to load the page.tpl.html contents from cache.
drupalgap.settings.cache.theme_registry = true;

