({
    generateTemplateText: function(component, inputIdsByFieldName) {
        var newEvent = component.getEvent("generateEmailTemplate");
        newEvent.setParams({ "inputIdsByFieldName": inputIdsByFieldName });
        newEvent.fire();
    }
})
