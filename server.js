"use strict";

// ----------------------------------------------------------------------------

function setCivilianPosition(civilian, x, y, z) {
    triggerNetworkEvent("v.civ.pos", getSyncerFromID(civilian.syncer), civilian, x, y, z);
}

function setCivilianHeading(civilian, angle) {
    triggerNetworkEvent("v.civ.zrot", getSyncerFromID(civilian.syncer), civilian, angle);
}

function giveCivilianWeapon(civilian, weaponID, ammo) {
	console.log(civilian.syncer);
    triggerNetworkEvent("v.civ.wep.add", getSyncerFromID(civilian.syncer), civilian, weaponID, ammo);
}

function clearCivilianWeapons(civilian) {
    triggerNetworkEvent("v.civ.wep.clr", getSyncerFromID(civilian.syncer), civilian, client);
}

function setCivilianSkin(civilian, skinID) {
    triggerNetworkEvent("v.civ.skin", getSyncerFromID(civilian.syncer), civilian, skinID);
}

function setCivilianInvincible(civilian, state) {
    triggerNetworkEvent("v.civ.god", getSyncerFromID(civilian.syncer), civilian, state);
}

function setCivilianProofs(civilian, proof, state) {
    triggerNetworkEvent("v.civ.proofs", getSyncerFromID(civilian.syncer), civilian, proof, state);
}

function setCivilianHealth(civilian, health) {
    triggerNetworkEvent("v.civ.hp", getSyncerFromID(civilian.syncer), civilian, health);
}

function setCivilianArmour(civilian, armour) {
    triggerNetworkEvent("v.civ.ap", getSyncerFromID(civilian.syncer), civilian, armour);
}

function warpCivilianIntoVehicle(civilian, vehicle, driver) {
    triggerNetworkEvent("v.civ.veh.warpin", getSyncerFromID(civilian.syncer), civilian, vehicle, driver);
}

function makeCivilianEnterVehicle(civilian, vehicle, driver) {
    triggerNetworkEvent("v.civ.veh.in", getSyncerFromID(civilian.syncer), civilian, vehicle, driver);
}

function makeCivilianExitVehicle(civilian) {
    triggerNetworkEvent("v.civ.veh.in", getSyncerFromID(civilian.syncer), civilian);
}

function removeCivilianFromVehicle(civilian) {
    triggerNetworkEvent("v.civ.veh.eject", getSyncerFromID(civilian.syncer), civilian);
}

function makeCivilianWalkToPos(civilian, x, y, z) {
    triggerNetworkEvent("v.civ.walk.pos", getSyncerFromID(civilian.syncer), civilian, x, y);
}

function makeCivilianWalkForward(civilian, distance) {
    triggerNetworkEvent("v.civ.walk.fwd", getSyncerFromID(civilian.syncer), civilian, distance);
}

function makeCivilianWalkToElement(civilian, element) {
    triggerNetworkEvent("v.civ.walk.to", getSyncerFromID(civilian.syncer), civilian, element);
}

function makeCivilianRunToPos(civilian, x, y, z) {
    triggerNetworkEvent("v.civ.run.pos", getSyncerFromID(civilian.syncer), civilian, x, y);
}

function makeCivilianRunForward(civilian, distance) {
    triggerNetworkEvent("v.civ.run.fwd", getSyncerFromID(civilian.syncer), civilian, distance);
}

function makeCivilianRunToElement(civilian, element) {
    triggerNetworkEvent("v.civ.run.to", getSyncerFromID(civilian.syncer), civilian, element);
}

function makeCivilianDuck(civilian) {
    triggerNetworkEvent("v.civ.duck", getSyncerFromID(civilian.syncer), civilian);
}

function makeCivilianHailTaxi(civilian) {
    triggerNetworkEvent("v.civ.hailtaxi", getSyncerFromID(civilian.syncer), civilian);
}

function resurrectCivilian(civilian) {
    triggerNetworkEvent("v.civ.resurrect", getSyncerFromID(civilian.syncer), civilian);
}

function makeCivilianPointGunAt(civilian, thing) {
    triggerNetworkEvent("v.civ.aimat", getSyncerFromID(civilian.syncer), civilian, thing);
}

function makeCivilianStayInSamePlace(civilian, state) {
    triggerNetworkEvent("v.civ.stay", getSyncerFromID(civilian.syncer), civilian, state);
}

function setCivilianCollision(civilian, state) {
    triggerNetworkEvent("v.civ.col", getSyncerFromID(civilian.syncer), civilian, state);
}

function setCivilianThreatSearch(civilian, threat) {
    triggerNetworkEvent("v.civ.threat.add", getSyncerFromID(civilian.syncer), civilian, threat);
}

function setCivilianHeedThreats(civilian, state) {
    triggerNetworkEvent("v.civ.threat.heed", getSyncerFromID(civilian.syncer), civilian, state);
}

function clearCivilianThreatSearch(civilian) {
    triggerNetworkEvent("v.civ.threat.clr", getSyncerFromID(civilian.syncer), civilian);
}

function makeCivilianFlipOff(civilian) {
    triggerNetworkEvent("v.civ.fu", getSyncerFromID(civilian.syncer), civilian);
}

function setCivilianPedStats(civilian, stat) {
    triggerNetworkEvent("v.civ.stat", getSyncerFromID(civilian.syncer), civilian, stat);
}

function setCivilianObjective(civilian, objectiveID, x = 0, y = 0, z = 0) {
    triggerNetworkEvent("v.civ.objective", getSyncerFromID(civilian.syncer), civilian, objectiveID, x, y, z);
}

function setCivilianPedType(civilian, pedType) {
    triggerNetworkEvent("v.civ.type", getSyncerFromID(civilian.syncer), civilian, pedType);
}

function setCivilianWanderPath(civilian, wanderPath) {
    triggerNetworkEvent("v.civ.wanderpath", getSyncerFromID(civilian.syncer), civilian, wanderPath);
}

function setCivilianScale(civilian, x, y, z) {
    triggerNetworkEvent("v.civ.scale", getSyncerFromID(civilian.syncer), civilian, x, y, z);
}

function setCivilianWalkStyle(civilian, walkStyle) {
    triggerNetworkEvent("v.civ.walkstyle", getSyncerFromID(civilian.syncer), civilian, walkStyle);
}

function mekeCivilianSpeak(civilian, speechID) {
    triggerNetworkEvent("v.civ.say", getSyncerFromID(civilian.syncer), civilian, speechID);
}

function setCivilianAnim(civilian, anim) {
    triggerNetworkEvent("v.civ.anim", getSyncerFromID(civilian.syncer), civilian, anim);
}

function removeLimbFromCivilian(civilian, bodyPart) {
    triggerNetworkEvent("v.civ.removepart", getSyncerFromID(civilian.syncer), civilian, bodyPart);
}

function setCivilianActiveWeapon(civilian, weaponID) {
    triggerNetworkEvent("v.civ.wep.set", getSyncerFromID(civilian.syncer), civilian, weaponID);
}

// ----------------------------------------------------------------------------

function setPlayerPosition(client, x, y, z) {
    triggerNetworkEvent("v.plr.pos", client, x, y, z);
}

function setPlayerHeading(client, angle) {
    triggerNetworkEvent("v.plr.zrot", client, angle);
}

function givePlayerWeapon(client, weaponID, ammo) {
    triggerNetworkEvent("v.plr.wep.add", client, weaponID, ammo);
}

function clearPlayerWeapons(client) {
    triggerNetworkEvent("v.plr.wep.clr", client);
}

function setPlayerSkin(client, skinID) {
    triggerNetworkEvent("v.plr.skin", client, skinID);
}

function setPlayerInvincible(client, state) {
    triggerNetworkEvent("v.plr.god", client, state);
}

function setPlayerProofs(client, bullet, fire, explosion, collision, melee) {
    triggerNetworkEvent("v.plr.proofs", client, bullet, fire, explosion, collision, melee);
}

function setPlayerHealth(client, health) {
    triggerNetworkEvent("v.plr.hp", client, health);
}

function setPlayerArmour(client, armour) {
    triggerNetworkEvent("v.plr.ap", client, armour);
}

function warpPlayerIntoVehicle(client, vehicleID, driver) {
	if(driver) {
		triggerNetworkEvent("v.plr.veh.driver", client, vehicleID);
	} else {
		triggerNetworkEvent("v.plr.veh.passenger", client, vehicleID);
	}
}

function removePlayerFromVehicle(client) {
    triggerNetworkEvent("v.plr.veh.warpout", client);
}

function makePlayerEnterVehicle(client, vehicleID, driver) {
    triggerNetworkEvent("v.plr.veh.enter", client, vehicleID, driver);
}

function makePlayerExitVehicle(client) {
    triggerNetworkEvent("v.plr.veh.exit", client);
}

function setPlayerWantedLevel(client, wantedLevel) {
    triggerNetworkEvent("v.plr.stars", client, wantedLevel);
}

function makePlayerFlipOff(client) {
    triggerNetworkEvent("v.plr.fu", client);
}

function makePlayerDuck(client) {
    triggerNetworkEvent("v.plr.duck", client);
}

// ----------------------------------------------------------------------------

function getSyncerFromID(syncerID) {
	let clients = getClients();
	return clients[syncerID];
}

function getClientFromID(clientID) {
	let clients = getClients();
	return clients[clientID];
}

function getClientID(client) {
	let clients = getClients();
	for(let i in clients) {
		if(clients[i] == client) {
			return i;
		}
	}
	
	return -1;
}

function getClientIDFromName(clientName) {
	let clients = getClients();
	for(let i in clients) {
		if(clients[i].name == clientName) {
			return i;
		}
	}
	
	return -1;
}

// ----------------------------------------------------------------------------