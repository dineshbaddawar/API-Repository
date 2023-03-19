({
    doInit : function(component, event, helper) {
        debugger;
        var action = component.get("c.getAllProudcts");
        action.setCallback(this, function(response){
            if(response.getState() === "SUCCESS"){
                var result = response.getReturnValue();
                component.set('v.Productlist', result);  
            }
        });
        $A.enqueueAction(action);
    },
    selectSingleProduct : function(component, event, helper) {
        debugger;
        var TempProducts=[];
        var SelectedProductIds=component.get("v.AllProductIds");
        var SelectedProducts=component.get("v.selectedProductList");
        
        TempProducts = component.get("v.Productlist");
        
        var selectedContacts = [];
        var checkvalue = component.find("checkProduct");
        
        if(!Array.isArray(checkvalue)){
            if (checkvalue.get("v.value") == true) {
                selectedContacts.push(checkvalue.get("v.text"));
                SelectedProducts = SelectedProducts.filter(record => record.Id !== checkvalue[i].get("v.text"));
            }
        }else{
            for (var i = 0; i < checkvalue.length; i++) {
                if (checkvalue[i].get("v.value") == true) {
                    selectedContacts.push(checkvalue[i].get("v.text"));
                    if(SelectedProducts.find(item=>item.Id==checkvalue[i].get("v.text"))){
                        console.log('This Id Exists')
                    }
                    else{
                        SelectedProducts.push(TempProducts.find(record => record.Id === checkvalue[i].get("v.text"))); 
                        console.log('Id List SelectedProducts '+SelectedProducts);
                    }
                    
                }
            }
        }
        component.set("v.selectedProductList", SelectedProducts);
        
        component.set("v.AllProductIds", selectedContacts);
    },
})