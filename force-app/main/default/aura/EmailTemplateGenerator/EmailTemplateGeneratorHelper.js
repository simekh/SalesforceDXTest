({
    generateTemplateText: function(component, inputIdsByFieldName) {
        var action = component.get("c.generateTemplateText");
        action.setParams({
            "inputIdsByFieldName": inputIdsByFieldName
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.templateText", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})


