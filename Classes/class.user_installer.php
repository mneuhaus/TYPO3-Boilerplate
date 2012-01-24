<?php
/***************************************************************
 *  Copyright notice
 *
 *  (c) 2009 Juergen Furrer <juergen.furrer@gmail.com>
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *  A copy is found in the textfile GPL.txt and important notices to the license
 *  from the author is found in LICENSE.txt distributed with these scripts.
 *
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

/**
 * Class that renders fields for the extensionmanager configuration
 *
 * @author     Marc Neuhaus <mneuhaus@famelo.com>
 * @package    TYPO3
 * @subpackage boilerplate
 */
class user_installer {
	
	/**
	 * Shows the update Message
	 *
	 * @return	string
	 */
	function displayMessage(&$params, &$tsObj) {
		$out = '';
		
		$url = "mod.php?M=tools_em&CMD[showExt]=boilerplate&SET[singleDetails]=info";

		$out .= '
<div style="width: 400px;">
	<div class="typo3-message message-information">
		<div class="message-header">' . $GLOBALS['LANG']->sL('LLL:EXT:boilerplate/Resources/Private/Language/locallang.xml:extmng.installermsgHeader') . '</div>
		<div class="message-body">
			' . $GLOBALS['LANG']->sL('LLL:EXT:boilerplate/Resources/Private/Language/locallang.xml:extmng.installermsg') . '<br />
			<a style="text-decoration:underline;" href="' . $url . '">
			' . $GLOBALS['LANG']->sL('LLL:EXT:boilerplate/Resources/Private/Language/locallang.xml:extmng.installermsgLink') . '</a>
		</div>
	</div>
</div>';

		return $out;
	}
	
}


if (defined('TYPO3_MODE') && $TYPO3_CONF_VARS[TYPO3_MODE]['XCLASS']['ext/boilerplate/lib/class.user_installer.php']) {
	include_once ($TYPO3_CONF_VARS[TYPO3_MODE]['XCLASS']['ext/boilerplate/lib/class.user_installer.php']);
}
?>
