({
    doInit : function(component, event, helper) {
        debugger;
        var action = component.get("c.getAccountontactCheckbox");
        action.setParams({
            "recordId" : component.get("v.recordId")
        });
        action.setCallback(this, function(response){
            if(response.getState() === "SUCCESS"){
                var result = response.getReturnValue();
                component.set('v.contactList', result);  
                
            }
        });
        $A.enqueueAction(action);
    },
    checkboxSelect : function(component, event, helper) {
        debugger;
           var selectedaccId= document.querySelector('input[name="options"]:checked').id;         
    },
    handleClick : function(component, event, helper) {
        debugger;
        alert("PDF")
    }
})