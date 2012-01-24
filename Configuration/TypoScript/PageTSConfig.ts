###########################################################
#	Backend Configuration
###########################################################


# Setting default language icon and name to german
mod.SHARED.defaultLanguageLabel = Deutsch
mod.SHARED.defaultLanguageFlag = de.gif

# Configure the save & preview button for several extensions
PREVIEWCONF {
	globalConf {
		Lvarname = L
	}
}

admPanel {
	### Module aktivieren:
	enable.edit = 0
	### Vorschau einschalten:
	enable.preview = 1
	### Bleistift:
	override.edit.displayFieldIcons = 0
	### ButtonLeiste:
	override.edit.displayIcons = 1
	### GROßES Adminpanel verbergen:
	hide = 1
}

mod.web_txtemplavoilaM1.enableDeleteIconForLocalElements = 1 
rgslideshow.tables = tt_content,tt_news,pages,fe_users

TCAdefaults.pages_language_overlay {
	sys_language_uid=1
}

TCAdefaults.tt_content {
	imagewidth = 150
	imageorient = 1
	imagecols = 3
	image_zoom = 1
	image_noRows = 1
    sys_language_uid = -1
}

TCEFORM{
	pages_language_overlay{
		author.disabled = 1
		author_email.disabled = 1
		abstract.disabled = 1
		keywords.disabled = 1
		description.disabled = 1
		media.disabled = 1
		starttime.disabled = 1
		endtime.disabled = 1
#		sys_language_uid.disabled = 1
		nav_title.disabled = 1
		tx_realurl_pathsegment.disabled = 1
	}
	tt_content {
	}
	tt_address {
        middle_name.disabled = 1
        building.disabled = 1
        room.disabled = 1
        name.disabled = 1
	}
}
