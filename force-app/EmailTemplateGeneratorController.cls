public with sharing class EmailTemplateGeneratorController {
    @AuraEnabled
    public static String generateTemplateText(Map<String, String> inputIdsByFieldName) {
        String text = 'asd';
        System.debug('inputIdsByFieldName: ' + inputIdsByFieldName);
        return text;
    }
}
