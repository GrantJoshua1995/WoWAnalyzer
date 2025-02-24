import React from 'react';
import { Yajinni, Mamtooth, Zerotorescue, Putro, joshinator, Gebuz, ackwell, emallson, blazyb, Dambroda, Nalhan, Satyric, niseko, Khadaj, Fyruna, Matardarix, jos3p, Aelexe, Chizu, Hartra344, Hordehobbs, Dorixius, Sharrq, Scotsoo, HolySchmidt, Zeboot, Abelito75, Anatta336, HawkCorrigan } from 'CONTRIBUTORS';
import ItemLink from 'common/ItemLink';
import ITEMS from 'common/ITEMS';
import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';
import { change, date } from 'common/changelog';
import Contributor from 'interface/contributor/Button';

export default [
  change(date(2019, 8, 3), 'Keep track of disabled modules names during production.', Zeboot),
  change(date(2019, 8, 3), 'Made the error handler more resilient to errors in browser extensions.', Zerotorescue),
  change(date(2019, 8, 3), 'Changed polyfilling so we might accidentally support more old and/or shitty browsers.', Zerotorescue),
  change(date(2019, 8, 3), 'Updated to create-react-app 3 and made the development environment easier to update.', Zerotorescue),
  change(date(2019, 8, 2), 'Added \'degraded experience\' toaster in case of disabled modules.', Zeboot),
  change(date(2019, 8, 2), <>Fixed the Haste value of <SpellLink id={SPELLS.EVER_RISING_TIDE_MAJOR.id} /></>, niseko),
  change(date(2019, 7, 27), 'Added Unbridled Fury to the list of strong pre-potions.', emallson),
  change(date(2019, 7, 27), <>Added <SpellLink id={SPELLS.NULL_DYNAMO.id} /> essence.</>, emallson),
  change(date(2019, 7, 25), 'Fixed a crash in the Ever-Rising Tide Module', HawkCorrigan),
  change(date(2019, 7, 23), 'Added 8.2 weapon enchants.', Zeboot),
  change(date(2019, 7, 21), 'Update error logging to reduce overhead.', Zerotorescue),
  change(date(2019, 7, 20), 'Added news article about time filtering.', Zeboot),
  change(date(2019, 7, 20), 'Allow for repeated phases in bossfights (e.g. Lady Ashvane / Radiance of Azshara).', Zeboot),
  change(date(2019, 7, 20), 'Made time filtering potion whitelist import from the potions module to avoid having to update separately each patch.', Zeboot),
  change(date(2019, 7, 20), <>Fixed <SpellLink id={SPELLS.CONCENTRATED_FLAME.id} /> not accounting for absorbs.</>, [Zeboot]),
  change(date(2019, 7, 20), 'Show changelog entries along with news on the frontpage.', [Zerotorescue]),
  change(date(2019, 7, 20), <>Removed ads by Google and most ad spots as they were not worth the degraded experience for you guys. Instead, please consider a monthly donation on <a href="https://www.patreon.com/wowanalyzer">Patreon</a> to support the project and unlock Premium, or bounty tickets on <a href="https://www.bountysource.com/teams/wowanalyzer">BountySource</a> for contributors to solve (currently active bounties: $1,550).</>, [Zerotorescue]),
  change(date(2019, 7, 20), <>Added <SpellLink id={SPELLS.WORLDVEIN_RESONANCE.id} /> essence.</>, [Anatta336]),
  change(date(2019, 7, 20), 'Updated the build process to ensure every new pull request has a changelog entry.', Zerotorescue),
  change(date(2019, 7, 19), 'Added boss configs and phase info for Eternal Palace.', [Sharrq]),
  change(date(2019, 7, 16), 'Added the ability to filter the results by time period.', [Zeboot]),
  change(date(2019, 7, 16), 'Added the ability to filter the results by phases.', [Zeboot]),
  change(date(2019, 7, 12), <>Added Major <SpellLink id={SPELLS.CONCENTRATED_FLAME.id} /> and Minor <SpellLink id={SPELLS.ANCIENT_FLAME.id} /> essences.</>, [Yajinni]),
  change(date(2019, 6, 25), 'Changed the search character default to the Eternal Palace raid.', [Yajinni]),
  change(date(2019, 6, 25), <>Added <SpellLink id={SPELLS.EVER_RISING_TIDE_MAJOR.id} /> and <SpellLink id={SPELLS.EVER_RISING_TIDE.id} /> essences.</>, [niseko]),
  change(date(2019, 6, 19), 'Added Eternal Palace raid information to zones.', [Yajinni]),
  change(date(2019, 6, 16), <>Fixed issue where Cooldown's Even more button would cause the website to crash. </>, [Abelito75, Zeboot]),
  change(date(2019, 6, 16), 'Fixed issues with shared CDs (like potions) in the timeline.', [Zeboot]),
  change(date(2019, 6, 10), 'Added URL bar search support for report links.', [Zeboot]),
  change(date(2019, 6, 10), 'Fixed an issue with some items not providing relevant cast events.', [Zeboot]),
  change(date(2019, 6, 10), 'Added most items from the Crucible of Storms raid.', [Zeboot]),
  change(date(2019, 6, 2), <>Added a <SpellLink id={SPELLS.IGNITION_MAGES_FUSE_BUFF.id} /> module to track usage and average haste gained.</>, [HolySchmidt]),
  change(date(2019, 5, 12), 'Added average heart of azeroth level to the player selection page', [Scotsoo]),
  change(date(2019, 5, 10), <>Fixed an issue where the timeline and the Cancelled Casts statistic would incorrectly mark a spell as cancelled in high latency situations.</>, [Sharrq]),
  change(date(2019, 4, 20), <>Fixed issue for mages where the timeline would show a cast as cancelled if they cast an ability that could be cast while casting (e.g. <SpellLink id={SPELLS.SHIMMER_TALENT.id} /> or <SpellLink id={SPELLS.FIRE_BLAST.id} />).</>, [Sharrq]),
  change(date(2019, 4, 17), 'Added the Crucible of Storms raid to the character search and made it the default raid.', [Yajinni]),
  change(date(2019, 3, 30), 'Fixed issue where the character parses page didn\'t return any results when region wasn\'t capitalized.', [Zerotorescue]),
  change(date(2019, 3, 21), 'Added Battle of Dazar\'alor Vantus Runes so they should now be shown in the statistics.', [Zerotorescue]),
  change(date(2019, 3, 21), <>Added food buffs that were added since 8.1 so they'll correctly trigger the <i>food used</i> checklist item (<a href="https://twitter.com/BMHunterWow/status/1108717252243791873">the bug report</a>).</>, [Zerotorescue]),
  change(date(2019, 3, 19), 'Improved the display of the checklist rules on mobile devices.', [Zerotorescue]),
  change(date(2019, 3, 16), <>Restructured the server setup to eliminate API downtime. The source code for the server can now be found <a href="https://github.com/WoWAnalyzer/server">here</a>.</>, [Zerotorescue]),
  change(date(2019, 3, 16), 'Show "TOP 100" in the throughput bar performance when eligible.', [Zerotorescue]),
  change(date(2019, 3, 15), 'Fixed an issue where the azerite levels didn\'t show up in the player selection.', [Zerotorescue]),
  change(date(2019, 3, 14), 'Fixed an issue that lead to not all azerite power icons showing up properly on the character tab.', [Zerotorescue]),
  change(date(2019, 3, 14), 'Fixed a crash in player selection when WCL sent corrupt player info.', [Zerotorescue]),
  change(date(2019, 3, 14), 'Fixed a crash when adblock is enabled.', [Zerotorescue]),
  change(date(2019, 3, 14), 'Fixed the layout of the "outdated patch" warning screen.', [Zerotorescue]),
  change(date(2019, 3, 14), 'Fixed a crash on initial load in Microsoft Edge.', [Zerotorescue]),
  change(date(2019, 3, 13), 'Updated Discord link description text.', [Zerotorescue]),
  change(date(2019, 3, 13), 'Fallback to ads for our Premium when adblock is enabled.', [Zerotorescue]),
  change(date(2019, 3, 13), 'Replaced the statistics ad with an in-feed ad that better fits the layout.', [Zerotorescue]),
  change(date(2019, 3, 13), 'Replaced the Patreon page links with direct join links to make it easier to sign up.', [Zerotorescue]),
  change(date(2019, 3, 12), 'Fixed a crash on the results page when the player info received from Warcraft Logs is corrupt (now it shows an alert instead).', [Zerotorescue]),
  change(date(2019, 3, 12), 'Fixed a crash on the statistics tab when WCL has no rankings data (e.g. due to the 8.1.5 partitioning).', [Zerotorescue]),
  change(date(2019, 3, 10), 'WoWAnalyzer 3.0! This is the biggest update since the release, featuring a completely new interface, with a new logo, color scheme, and various new pages and improvements to the results page including a complete rework of the timeline. Many people worked on this, thanks so much to everyone who contributed!', [Zerotorescue]),
  change(date(2019, 3, 2), <>Hide checklist rules if all of the requirements beneath them are hidden/disabled.</>, [Sharrq]),
  change(date(2019, 2, 24), <>Added composition details to raid composition screen showing role counts and avarage ilvl.</>, [Dorixius]),
  change(date(2019, 2, 15), <>If Warcraft Logs sends a corrupt JSON message, try to automatically decorrupt it.</>, [Zerotorescue]),
  change(date(2019, 1, 31), <>Fixed an issue where the "A connection error occured." message might be shown when an error occured during module initialization.</>, [Zerotorescue]),
  change(date(2019, 1, 31), <>Added <SpellLink id={SPELLS.TREACHEROUS_COVENANT.id} /> module.</>, [Khadaj]),
  change(date(2019, 1, 30), <>Added <ItemLink id={ITEMS.CREST_OF_PAKU_ALLIANCE.id} /> analyzer and accounted for its Haste gain.</>, [Zerotorescue]),
  change(date(2019, 1, 30), <>Added <SpellLink id={SPELLS.BONDED_SOULS_TRAIT.id} /> azerite trait and accounted for its Haste gain.</>, [Zerotorescue]),
  change(date(2019, 1, 26), <>Account for Haste gained from <SpellLink id={SPELLS.OPULENCE_AMETHYST_OF_THE_SHADOW_KING.id} />.</>, [Zerotorescue]),
  change(date(2019, 1, 25), 'Add Battle of Dazar\'alor to the selectable raids in the character page filters.', [joshinator]),
  change(date(2018, 12, 29), 'Split mitigation check into Physical and Magical.', [emallson, Hordehobbs]),
  change(date(2018, 12, 20), 'Added better caching for character profiles from the blizzard API', [Hartra344]),
  change(date(2018, 12, 10), 'Migraged Battle.Net API calls to to use the new blizzard.com Api endpoint', [Hartra344]),
  change(date(2018, 12, 9), 'Fixed crashes when switching players that can get the same buff.', [Chizu]),
  change(date(2018, 12, 9), 'Split the food check in the Be Well Prepared section of the checklist to check if food buff was present and if that food buff was high quality. Updated the suggestions to reflect this.', [Yajinni]),
  change(date(2018, 12, 9), 'Added a link to reports that have similiar kill-times under the Statistics tab for easier comparison.', [Putro]),
  change(date(2018, 11, 15), <>Added <ItemLink id={ITEMS.DREAD_GLADIATORS_INSIGNIA.id} /> module.</>, [Aelexe]),
  change(date(2018, 11, 14), <>Added <SpellLink id={SPELLS.GIFT_OF_THE_NAARU_MAGE.id} /> to ability list.</>, [Dambroda]),
  change(date(2018, 11, 13), 'Added an AverageTargetsHit module for general usage.', [Putro]),
  change(date(2018, 11, 12), <>Added <ItemLink id={ITEMS.AZEROKKS_RESONATING_HEART.id} /> module.</>, [Aelexe]),
  change(date(2018, 11, 11), <>Added <ItemLink id={ITEMS.DISC_OF_SYSTEMATIC_REGRESSION.id} /> module.</>, [Matardarix]),
  change(date(2018, 11, 11), <>Added <ItemLink id={ITEMS.MYDAS_TALISMAN.id} /> module.</>, [Aelexe]),
  change(date(2018, 11, 10), <>Added <ItemLink id={ITEMS.ROTCRUSTED_VOODOO_DOLL.id} /> module.</>, [jos3p]),
  change(date(2018, 11, 9), <>Added <ItemLink id={ITEMS.REZANS_GLEAMING_EYE.id} /> module.</>, [Matardarix]),
  change(date(2018, 11, 6), <>Added <ItemLink id={ITEMS.SYRINGE_OF_BLOODBORNE_INFIRMITY.id} /> module.</>, [Matardarix]),
  change(date(2018, 11, 2), <>Added <SpellLink id={SPELLS.TRADEWINDS.id} /> module.</>, [Fyruna]),
  change(date(2018, 11, 2), <>Added <SpellLink id={SPELLS.UNSTABLE_CATALYST.id} /> module.</>, [niseko]),
  change(date(2018, 11, 1), <>Added <SpellLink id={SPELLS.SWIRLING_SANDS.id} /> module.</>, [niseko]),
  change(date(2018, 10, 26), <>Added <SpellLink id={SPELLS.WOUNDBINDER.id} />, <SpellLink id={SPELLS.BRACING_CHILL.id} />, <SpellLink id={SPELLS.SYNERGISTIC_GROWTH.id} />, and <SpellLink id={SPELLS.EPHEMERAL_RECOVERY_BUFF.id} /> azerite modules. </>, [Khadaj]),
  change(date(2018, 10, 26), <>Added <ItemLink id={ITEMS.LUSTROUS_GOLDEN_PLUMAGE.id} /> module. </>, [Putro]),
  change(date(2018, 10, 24), <>Added <ItemLink id={ITEMS.DREAD_GLADIATORS_BADGE.id} /> module. </>, [Putro]),
  change(date(2018, 10, 23), <>Added <SpellLink id={SPELLS.ARCHIVE_OF_THE_TITANS.id} /> module.</>, [niseko]),
  change(date(2018, 10, 23), <>Added <ItemLink id={ITEMS.DREAD_GLADIATORS_MEDALLION.id} /> module.</>, [niseko]),
  change(date(2018, 10, 22), <>Added <SpellLink id={SPELLS.COASTAL_SURGE.id} /> module.</>, [niseko]),
  change(date(2018, 10, 21), <>Added <SpellLink id={SPELLS.BLIGHTBORNE_INFUSION.id} /> module.</>, [niseko]),
  change(date(2018, 10, 17), <>Fixed mana usage for innervate in cooldown tabs for healers.</>, [blazyb]),
  change(date(2018, 10, 6), <>Corrected Azerite Scaling for traits with split stat scaling (e.g. <SpellLink id={SPELLS.GEMHIDE.id} />).</>, [emallson]),
  change(date(2018, 10, 6), <React.Fragment> Added a damage reduction module for dwarf racial <SpellLink id={SPELLS.STONEFORM.id} /> </React.Fragment>, [Satyric]),
  change(date(2018, 10, 2), 'Added a BFA-ready food and flasker checker to the well prepared checklist, with a lot of help from ArthurEnglebert', [Putro]),
  change(date(2018, 9, 30), 'Removed the suggestions for Healing Potions and Healthstones, and added their status to the death recap panel. The "you died" suggestions will now refer to this for more information.', [Zerotorescue]),
  change(date(2018, 9, 30), 'The "you had mana left" suggestion will no longer show up on wipes.', [Zerotorescue]),
  change(date(2018, 9, 30), 'The "you died" suggestion will no longer show up when you died within 15 seconds of a wipe.', [Zerotorescue]),
  change(date(2018, 9, 29), 'Added a "spec currently not supported" page, since the about panel appeared to be insufficient.', [Zerotorescue]),
  change(date(2018, 9, 29), 'Completely reworked the way reports are loaded to be much more maintainable. There were also some minor performance imprpvements.', [Zerotorescue]),
  change(date(2018, 9, 25), <> Added <SpellLink id={SPELLS.BLESSED_PORTENTS.id} /> module.</>, [Nalhan]),
  change(date(2018, 9, 24), <> Added <SpellLink id={SPELLS.CONCENTRATED_MENDING.id} /> module. </>, [Nalhan]),
  change(date(2018, 9, 24), <>Added <SpellLink id={SPELLS.HEED_MY_CALL.id} /> module.</>, [Dambroda]),
  change(date(2018, 9, 22), <>Added <SpellLink id={SPELLS.GUTRIPPER.id} /> module.</>, [Dambroda]),
  change(date(2018, 9, 19), <>Added <SpellLink id={SPELLS.OVERWHELMING_POWER.id} /> and <SpellLink id={SPELLS.BLOOD_RITE.id} /> modules.</>, [joshinator]),
  change(date(2018, 9, 16), 'Added the players azerite traits to the character pane.', [joshinator]),
  change(date(2018, 9, 17), 'Added Azerite trait Laser Matrix.', [blazyb]),
  change(date(2018, 9, 17), <>Adds <ItemLink id={ITEMS.GALECALLERS_BOON.id} /> and <ItemLink id={ITEMS.HARLANS_LOADED_DICE.id} /> modules.</>, [Putro]),
  change(date(2018, 9, 17), <>Added a <SpellLink id={SPELLS.ELEMENTAL_WHIRL.id} /> module.</>, [Putro]),
  change(date(2018, 9, 17), <>Added a <ItemLink id={ITEMS.DARKMOON_DECK_FATHOMS.id} /> module.</>, [Putro]),
  change(date(2018, 9, 16), <>Added a <SpellLink id={SPELLS.METICULOUS_SCHEMING.id} />-module.</>, [joshinator]),
  change(date(2018, 9, 12), 'Added support for item Seabreeze', [blazyb]),
  change(date(2018, 9, 10), 'Added the engineering weapon enchants to the EnchantChecker and mark them as valid weapon enchants.', [Putro]),
  change(date(2018, 8, 8), 'Moved the detail tab selection to the left side.', [Zerotorescue]),
  change(date(2018, 8, 6), 'If a module has a bug that causes an error it will now automatically be disabled instead of crashing.', [Zerotorescue]),
  change(date(2018, 8, 5), 'Linking a hunter pet doesn\'t crash the analyzer url builder anymore.', [Mamtooth]),
  change(date(2018, 8, 5), <>Added a <SpellLink id={SPELLS.MIGHT_OF_THE_MOUNTAIN.id} /> racial contribution module. Thanks to @Iyob for the suggestion.</>, [Zerotorescue]),
  change(date(2018, 8, 4), 'Account for the 1% Critical Strike racial from Blood Elfs.', [Zerotorescue]),
  change(date(2018, 8, 3), <>Added an <SpellLink id={SPELLS.ARCANE_TORRENT_MANA1.id} /> module that works for all Blood Elfs.</>, [Zerotorescue]),
  change(date(2018, 6, 24), 'Added tracking of potion cooldowns and split Healthstone into Healthstone and health pots.', [Gebuz]),
  change(date(2018, 7, 26), <>Updated our GlobalCooldown module to automatically ignore certain casts if we've marked them as not being actual casts. BM Hunter casting two spells (one for buff, one for damage) per <SpellLink id={SPELLS.BARBED_SHOT.id} /> is an example.</>, [Putro]),
  change(date(2018, 7, 24), 'Added character information fetching from Battle.net (when possible) to gain race information and character thumbnails. The character thumbnail will now be used in the versus-header as per the original design.', [Zerotorescue]),
  change(date(2018, 7, 21), 'Added a raid health tab to healer roles.', [Zerotorescue]),
  change(date(2018, 7, 19), <>Fixed Darkmoon Deck: Promises squished mana values.</>, [Zerotorescue]),
  change(date(2018, 7, 19), <>Fixed a crash when wearing Drape of Shame.</>, [Zerotorescue]),
  change(date(2018, 7, 15), 'Added a link to the Legion analyzer in the links under the report bar.', [Zerotorescue]),
  change(date(2018, 7, 11), <>Added support for the <SpellLink id={SPELLS.GEMHIDE.id} /> trait.</>, [emallson]),
  change(date(2018, 7, 11), <>Parsing time is about 35% quicker! Thanks to <Contributor {...ackwell} /> for showing <a href="https://github.com/WoWAnalyzer/WoWAnalyzer/issues/1799">the idea</a> worked out in <a href="https://github.com/xivanalysis/xivanalysis">xivanalysis</a>.</>, [Zerotorescue]),
  change(date(2018, 7, 7), 'Implemented a system for localization. We\'ll need to manually add support for localization everywhere before things can be translated, this will take some time.', [Zerotorescue]),
  change(date(2018, 7, 6), 'Changed tooltips to be static except for large bars in the timeline.', [Zerotorescue]),
  change(date(2018, 7, 6), 'When switching fights in the results page, the selected tab will now be remembered.', [Zerotorescue]),
  change(date(2018, 7, 5), 'Added a toggle to the results page to adjust statistics for fight downtime. This is an experimental feature.', [Zerotorescue]),
  change(date(2018, 6, 28), 'Allow Warcaftlogs- & BattleNet-character-links in the report selecter.', [joshinator]),
  change(date(2018, 6, 24), <>Changed the <SpellLink id={SPELLS.HEALTHSTONE.id} /> suggestion to always be of minor importance.</>, [Zerotorescue]),
  change(date(2018, 6, 24), 'Added an "About WoWAnalyzer" panel to the home page and updated the announcement.', [Zerotorescue]),
  change(date(2018, 6, 24), 'The report history panel will be hidden where there are no entries.', [Zerotorescue]),
  change(date(2018, 6, 23), 'Revamped all spells with static GCDs or base GCDs different from the class default.', [Zerotorescue]),
  change(date(2018, 6, 22), 'Added WoWAnalyzer Premium. See the announcement for more information.', [Zerotorescue]),
  change(date(2018, 6, 22), 'Added "ads" to help fund further development. The "ads" will at some point in the future turn into real ads from an ad platform.', [Zerotorescue]),
  change(date(2018, 6, 12), 'Updated character selection to default to HPS or DPS as metric, depending on characters last active spec.', [joshinator]),
  change(date(2018, 6, 8), 'Added Healthstone/Health pots to abilities and the death recap.', [Gebuz]),
  change(date(2018, 6, 6), 'Fixed the character selection realm dropdown in Mozilla Firefox.', [Zerotorescue]),
  change(date(2018, 6, 2), 'Improved error handling so the app will no longer permanently stay stuck in a loading state when something unexpected happens.', [Zerotorescue]),
  change(date(2018, 6, 2), 'Fixed an issue where the character search realm matching was case-sensitive.', [Zerotorescue]),
  change(date(2018, 6, 1), <>Removed all changelog entries before June 2018, and updated spec contributors to match. If you're interested in older changelogs, visit <a href="https://legion.wowanalyzer.com/">https://legion.wowanalyzer.com/</a>.</>, [Zerotorescue]),
];
