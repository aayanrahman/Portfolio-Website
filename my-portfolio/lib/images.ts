/**
 * All site image paths live here.
 * To add an image: drop the file in public/ at the path shown, done.
 * Missing images degrade gracefully — the alt text is shown as a placeholder.
 *
 * Paths go through asset() so they resolve correctly when the site is served
 * from a subpath (see lib/asset.ts).
 */

// things to add yt chanel instragram account
// stickers to cover the empty areas of the website and make it look more lively and fun

import { asset } from "@/lib/asset"

export const experienceImages = {
  gravity: {
    esp32:       asset("/images/experience/gravity/esp32-firmware.JPG"),
    motorDebug:  asset("/images/experience/gravity/motor-debug.jpg"),
    soldering:   asset("/images/experience/gravity/soldering.jpg"),
    cad:         asset("/images/experience/gravity/cad.jpg"),
    zoho:        asset("/images/experience/gravity/zoho-firebase.jpg"),
  },
}

export const projectImages = {
  rocketry: {
    schematic: asset("/images/projects/rocketry/egse_2.png"),
    layout:    asset("/images/projects/rocketry/egse-layout.jpg"),
  },
  formulaElectric: {
    layout:    asset("/images/projects/formula-electric/boost_2.png"),
    schematic: asset("/images/projects/formula-electric/boost-schematic.jpg"),
  },
  electrathon: {
    raceDay: asset("/projects/electrathon/TitleFight.jpeg"),
    welding: asset("/projects/electrathon/weld.JPG"),
    award:   asset("/projects/electrathon/award.jpeg"),
    cad:     asset("/projects/electrathon/image.png"),
  },
  nfc: {
    card: asset("/projects/nfc/Card.png"),
    scan: asset("/projects/nfc/card-scan.jpg"),
  },
}

export const videos = {
  gravity:       asset("/videos/gravity.mp4"),
  ble:           asset("/videos/ble.mp4"),
  plasmaCutting: asset("/videos/plasma-cutting.mp4"),
}

export const stickers = {
  matcha:  asset("/stickers/matcha.png"),
  redbull: asset("/stickers/redbull.png"),
  star:    asset("/stickers/star.png"),
}
