/**
 * http://cdnjs.com/
 * Extract, save as window.cdnjs and output as JSON string.
 */

window.cdnjs = {};

$('#example').find('tr').each(function(){
   var name = $(this).attr('data-library-name'), 
       url = $(this).find('p[itemprop="downloadUrl"]').text(),
       description = $(this).find('[itemprop="description"]').text(),
       libUrl = $(this).find('[itemprop="url"]').attr('content'),
       ver = $(this).find('[itemprop="version"]').attr('content');
       
   cdnjs[name] = { 'name' : name, 'url' : url, 'description' : description, 'version' : ver, 'project' : libUrl };
});

console.log(window.cdnjs);
//console.log(JSON.stringify(cdn));