//Define call-backs for menu buttons
function doButton() {
    alert("Button clicked");
}

var buildMenuList = function() {
    
    if(swipemenu) {
        //Optional: override default menu height (default = 70px)
        swipemenu.setMenuHeight(100);
        
        //Required: Add menu buttons (can be text, images, or a mix of both):
        //  params (title, callback, alignRight, imagePath)
        swipemenu.addButton("", doButton, false, "images/image.png");
        swipemenu.addButton("", doButton, false, "images/HelloWorld.png");
        swipemenu.addButton("Label", doButton, false, "images/icon2.png");
        swipemenu.addButton("Text Only", doButton, true, "");
        swipemenu.addButton("URL", doButton, true, "http://icons.iconarchive.com/icons/martin-berube/animal/48/monkey-icon.png");
        swipemenu.addButton("[x]", swipemenu.close, true);
    }
}

/*
var loadCustomMenuItemsForPage = function() {
    if (blackberry.ui.menu.getMenuItems().length > 0) {
      blackberry.ui.menu.clearMenuItems();
    }
    
    var item = new blackberry.ui.menu.MenuItem(false, 1, "Click Me", customMenuItemClick);
    blackberry.ui.menu.addMenuItem(item);         
}

function customMenuItemClick() {
      alert("user just clicked me");
}*/
