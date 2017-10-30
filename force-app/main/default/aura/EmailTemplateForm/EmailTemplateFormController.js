({
    clickCreate: function(component, event, helper) {
        var validInput = component.find('generatetextform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If pass error checking
        if(validInput){
            // Create the new template text
            var contactId = component.get("v.contactId");
            var productId = component.get('v.productId');
            var inputIdsByFieldName = {"contactId" : contactId, "productId" : productId};
            
            helper.generateTemplateText(component, inputIdsByFieldName);
        }
    }
})
