page = PAGE
page.includeCSS.bootstrap = {$config.template_path}/Resources/Public/CSS/style.css
page {
    10 = FLUIDTEMPLATE
    10 {
	    file.stdWrap.cObject = CASE
	    file.stdWrap.cObject {
			# slide the template
			# key.data = levelfield:-1, backend_layout_next_level, slide
			# key.override.field = backend_layout
			# [backend_layout:uid] = TEXT
			# [backend_layout:uid].value = {$config.template_path}/Resources/Private/Templates/template.html
		  
			# default template file
			default = TEXT
			default.value = {$config.template_path}/Resources/Private/Templates/Default.html
	    }
        partialRootPath = {$config.template_path}/Resources/Private/Partials/
        layoutRootPath = {$config.template_path}/Resources/Private/Layouts/
        variables {
            pageTitle = TEXT
            pageTitle.data = page:title
            leftColumn < styles.content.getLeft
            content < styles.content.get
        }
    }
}

### General site config
config {
	# Development
	## Disable Cache
	config.no_cache = 1

	# html5? Yes, please!
	doctype = html_5
	
	# XML? No, thank you!
	xmlprologue = none
	
	html5boilerplate{
		# This replaces the html tag with some conditional comments for IE and a no-js class
		htmlTag (
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"> <!--<![endif]-->
		)

		# Make sure the meta charset is short and sweet
		metaCharsetTag = <meta charset="|">
		metaCharsetTag.insertAfter (
			<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
			<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	  	)
	}
	
	
	### Taking out the trash, aka. cleaning up the code
	
	# Tries to clean up the output. Tries...
	# xhtml_cleaning = all
	
	# If set, the stdWrap property “prefixComment” will be disabled, thus preventing any revealing and space-consuming comments in the HTML source code.
	disablePrefixComment = 1
	
	# If set, the inline styles TYPO3 controls in the core are written to a file
	inlineStyle2TempFile = 1
	
	# All javascript (includes and inline) will be moved to the bottom of the html document
	moveJsFromHeaderToFooter = 1
	
	# If set, the default JavaScript in the header will be removed (blurLink function and browser detection variables)
	removeDefaultJS = 1
	
	# If set inline or externalized (see removeDefaultJS above) JavaScript will be minified. 
	# Minification will remove all excess space and cause faster page loading.
	minifyJS = 1
	
	# Add L and print values to all links in TYPO3.
	linkVars = L, print

	# Charset, should always be utf-8
	renderCharset = utf-8
		
			
	### Search. This should be disabled if you are not using Indexed search!
	
	# For pages
	index_enable = {$config.index_enable}
	
	# For documents
	index_externals = {$config.index_externals}
	
	
	### Multidomain setup
	
	# If set, then every “typolink” is checked whether it's linking to a page within the current rootline of the site.
	typolinkCheckRootline = 1
	
	# This option enables to create links across domains using current domain's linking scheme.
	typolinkEnableLinksAcrossDomains = 1
	
	### Spam protection	
	spamProtectEmailAddresses = ascii
		
	
	### Enable RealURL
	tx_realurl_enable = 1
	
	### The <base> tag in the header of the document which is used by RealURL
	baseURL = {$config.baseURL}
	
}