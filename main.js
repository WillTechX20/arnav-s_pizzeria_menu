var requestedMenuItemsManager={
    requestedMenuItems: [],
    requestedMenuItemsCountNum: 0,
    ol: document.querySelector('.requested_menu_items'),
    addNewItem: function(){
        var newItemStr=prompt("Enter in the new item's name!");

        if(!(newItemStr==null)){
            this.requestedMenuItems.push(newItemStr);
            this.requestedMenuItems.sort();
            this.ol.innerHTML='';
            this.requestedMenuItemsCountNum=this.requestedMenuItems.length;
            this.requestedMenuItems.forEach(requestedMenuItem=>{
                var requestedMenuItemLi=document.createElement('li');

                requestedMenuItemLi.innerText=requestedMenuItem;
                this.ol.appendChild(requestedMenuItemLi);
            });
        
            if(this.requestedMenuItemsCountNum==1){
                document.querySelector('.no_requested_menu_items_message').remove();
            }
        }    
    }
};