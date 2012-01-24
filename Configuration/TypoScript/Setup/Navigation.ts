#------------------------------------------------------------
# Navigations
#------------------------------------------------------------
nav.simple.1 = HMENU
nav.simple.1 {
	entryLevel = 0
    1 = TMENU
    1 {
        expAll = 0
		noBlur = 1
        wrap = <ul class="hnav">|</ul>
		wrap.insertData = 1
        NO {
            wrapItemAndSub = <li class="first">|</li> |*| <li class="middle">|</li> |*| <li class="last">|</li>
        }

		ACT = 1
		ACT {
			ATagParams = class="active"
			wrapItemAndSub = <li class="active first">|</li> |*| <li class="active">|</li> |*| <li class="active last">|</li>
		}
		
		CUR = 1
		CUR {
			ATagParams = class="active"
			wrapItemAndSub = <li class="active first">|</li> |*| <li class="active">|</li> |*| <li class="active last">|</li>
		}
		
		ACTIFSUB = 1
		ACTIFSUB {
			wrapItemAndSub = <li class="expanded has-sub first">|</li> |*| <li class="expanded has-sub">|</li> |*| <li class="expanded has-sub last">|</li>
		}
    }
}
nav.simple.2 < nav.simple.1
nav.simple.2.entryLevel = 1
nav.simple.3 < nav.simple.1
nav.simple.3.entryLevel = 2
nav.simple.4 < nav.simple.1
nav.simple.4.entryLevel = 3

nav.multi.1 < nav.simple.1
nav.multi.1{
	entryLevel = 0
	1.wrap = <ul class="vnav">|</ul>
	2 < .1
	2.wrap = <ul>|</ul>
	3 < .2
	4 < .3
}
nav.multi.2 < nav.multi.1
nav.multi.2.entryLevel = 1
nav.multi.3 < nav.multi.1
nav.multi.3.entryLevel = 2
nav.multi.4 < nav.multi.1
nav.multi.4.entryLevel = 3

nav.dropdown.1 < nav.simple.1
nav.dropdown.1 {
	1{
		expAll = 1
		wrap = <ul class="dnav">|</ul>
	}
	2 < .1	
	2.wrap = <ul>|</ul>
	3 < .2	
	4 < .3
}
nav.dropdown.2 < nav.dropdown.1 
nav.dropdown.2.entryLevel = 1
nav.dropdown.3 < nav.dropdown.1 
nav.dropdown.3.entryLevel = 2
nav.dropdown.4 < nav.dropdown.1 
nav.dropdown.4.entryLevel = 3

nav.navbar < nav.dropdown.1
nav.navbar {
	1{
		expAll = 1
		wrap = <ul class="dnav bnav">|</ul>
	}
	2 < .1	
	2.wrap = <ul>|</ul>
	3 < .2	
	4 < .3
}

nav.sitemap < nav.dropdown.1
nav.sitemap {
    excludeUidList = 216
	entryLevel = 0
	1{
		expAll = 1
		wrap = <ul class="sitemap contain">|</ul>
	}
	2 < .1	
	2.wrap = <ul>|</ul>
	3 >	
	4 >
}

nav.folder < nav.simple.1
nav.folder {
	special = directory
	entryLevel = 0
}

nav.breadcrumb < nav.simple.1
nav.breadcrumb {
    special = rootline
	excludeUidList = {$pages.home}
    1 {
    	wrap = <ul class="breadcrumb hnav">|</ul>
		NO = 1
        NO {
#        	doNotLinkIt = 0 |*| 0 |*| 1
            wrapItemAndSub = <li class="first">|<span>&raquo;</span></li> |*| <li>|<span>&raquo;</span></li>  |*| <li class="last">|</li>
        }
		ACT < .NO
		ACTIFSUB < .NO
    }
}

nav.lang = HMENU
nav.lang {
	special = language
	special.value = 0,1
	special.normalWhenNoLanguage = 0
	wrap = <ul id="langswitch" class="hnav dr">|</ul>
	1 = TMENU
	1 {
		noBlur = 1
		NO = 1
		NO {
			linkWrap = <li>|</li>
			stdWrap.override = <span class="en">English</span> || <span class="de">Deutsch</span>
			doNotLinkIt = 1
			stdWrap.typolink.parameter.data = page:uid
			stdWrap.typolink.additionalParams = &L=0 || &L=1
			stdWrap.typolink.addQueryString = 1
			stdWrap.typolink.addQueryString.exclude = L,id,cHash,no_cache
			stdWrap.typolink.addQueryString.method = GET
			stdWrap.typolink.useCacheHash = 1
			stdWrap.typolink.no_cache = 0
		}
		# Aktive Sprache
		ACT < .NO
		ACT.linkWrap = <li class="active">|</li>
		# NO + Uebersetzung nicht vorhanden
		USERDEF1 < .NO
		# ACT + Uebersetzung nicht vorhanden
		USERDEF2 < .ACT
	}
}