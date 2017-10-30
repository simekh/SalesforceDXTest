({
    handleTextGeneration: function(component, event, helper) {
        var inputIdsByFieldName = event.getParam("inputIdsByFieldName");
        helper.generateTemplateText(component, inputIdsByFieldName);
	}
})
