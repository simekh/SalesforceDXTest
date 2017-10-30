public with sharing class EmailTemplateGeneratorController {
    @AuraEnabled
    public static String generateTemplateText(Map<String, String> inputIdsByFieldName) {
        String text = 'Detta kommer från en APEX controller. inputIdsByFieldName: ' + inputIdsByFieldName;
        System.debug('inputIdsByFieldName: ' + inputIdsByFieldName);
        return text;
    }
}
