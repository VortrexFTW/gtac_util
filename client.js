"use strict";

// ----------------------------------------------------------------------------

addNetworkHandler("v.plr.pos", function(x, y, z) {
    localPlayer.position = new Vec3(x, y, z);
});

addNetworkHandler("v.plr.zrot", function(angle) {
    localPlayer.heading = angle;
});

addNetworkHandler("v.plr.wep.add", function(weaponID, ammo) {
    localPlayer.giveWeapon(weaponID, ammo);
});

addNetworkHandler("v.plr.wep.clr", function() {
    localPlayer.clearWeapons();
});

addNetworkHandler("v.plr.skin", function(skinID) {
    localPlayer.skin = skinID;
});

addNetworkHandler("v.plr.god", function(state) {
    locallocalPlayer.invincible = state;
});

addNetworkHandler("v.plr.proofs", function(bullet, fire, explosion, collision, melee) {
    localPlayer.setProofs(bullet, fire, explosion, collision, melee);
});

addNetworkHandler("v.plr.hp", function(amount) {
    localPlayer.health = amount;
});

addNetworkHandler("v.plr.ap", function(amount) {
    localPlayer.armour = amount;
});

addNetworkHandler("v.plr.veh.driver", function(vehicle) {
	let vehicles = game.getVehicles();
    localPlayer.warpIntoVehicle(vehicles[vehicle], true);
});

addNetworkHandler("v.plr.veh.passenger", function(vehicleID) {
	let vehicles = game.getVehicles();
    localPlayer.warpIntoVehicle(vehicles[vehicleID], false);
});

addNetworkHandler("v.plr.eject", function() {
    localPlayer.removeFromVehicle();
});

addNetworkHandler("v.plr.stars", function(amount) {
    localPlayer.wantedLevel = amount;
});

addNetworkHandler("v.plr.fu", function(amount) {
    localPlayer.fuckU();
});

addNetworkHandler("v.plr.duck", function(amount) {
    localPlayer.duck();
});

// ----------------------------------------------------------------------------

addNetworkHandler("v.civ.pos", function(civilian, x, y, z) {
    civilian.position = new Vec3(x, y, z);
});

addNetworkHandler("v.civ.zrot", function(civilian, angle) {
    civilian.heading = angle;
});

addNetworkHandler("v.civ.wep.add", function(civilian, weaponID, ammo) {
    civilian.giveWeapon(weaponID, ammo);
});

addNetworkHandler("v.civ.wep.clr", function(civilian) {
    civilian.clearWeapons();
});

addNetworkHandler("v.civ.skin", function(civilian, skinID) {
    civilian.skin = skinID;
});

addNetworkHandler("v.civ.god", function(civilian, state) {
    civilian.invincible = state;
});

addNetworkHandler("v.civ.proofs", function(civilian, bullet, fire, explosion, collision, melee) {
    civilian.setProofs(bullet, fire, explosion, collision, melee);
});

addNetworkHandler("v.civ.hp", function(civilian, amount) {
    civilian.health = amount;
});

addNetworkHandler("v.civ.ap", function(civilian, amount) {
    civilian.armour = amount;
});

addNetworkHandler("v.civ.veh.warpin", function(civilian, vehicle, driver) {
    civilian.warpIntoVehicle(vehicle, driver)
});

addNetworkHandler("v.civ.veh.eject", function(civilian) {
    civilian.removeFromVehicle();
});

addNetworkHandler("v.civ.walk.pos", function(civilian, x, y) {
	let walkToPos = new Vec2(x, y);
    civilian.walkTo(walkToPos);
});

addNetworkHandler("v.civ.walk.fwd", function(civilian, distance) {
	let frontPos = getPosInFrontOfPos(civilian.position, civilian.heading, distance);
	let walkToPos = new Vec2(frontPos[0], frontPos[1]);
    civilian.walkTo(walkToPos);
});

addNetworkHandler("v.civ.walk.to", function(civilian, element) {
	let elementPos = element.position;
	let walkToPos = new Vec2(elementPos[0], elementPos[1]);
    civilian.walkTo(walkToPos);
});

addNetworkHandler("v.civ.walkstyle", function(civilian, walkStyle) {
    civilian.walkStyle = walkStyle;
});

addNetworkHandler("v.civ.run.pos", function(civilian, x, y) {
	let walkToPos = new Vec2(x, y);
    civilian.runTo(walkToPos);
});

addNetworkHandler("v.civ.walk.fwd", function(civilian, distance) {
	let frontPos = getPosInFrontOfPos(civilian.position, civilian.heading, distance);
	let walkToPos = new Vec2(frontPos[0], frontPos[1]);
    civilian.runTo(walkToPos);
});

addNetworkHandler("v.civ.run.to", function(civilian, element) {
	let elementPos = element.position;
	let walkToPos = new Vec2(elementPos[0], elementPos[1]);
    civilian.runTo(walkToPos);
});

addNetworkHandler("v.civ.duck", function(civilian) {
    civilian.duck();
});

addNetworkHandler("v.civ.fu", function(civilian) {
    civilian.fuckU();
});

addNetworkHandler("v.civ.hailtaxi", function(civilian) {
    civilian.hailTaxi();
});

addNetworkHandler("v.civ.aimat", function(civilian, thing) {
    civilian.pointGunAt(thing);
});

addNetworkHandler("v.civ.resurrect", function(civilian) {
    civilian.resurrect();
});

addNetworkHandler("v.civ.stay", function(civilian, state) {
    civilian.stayInSamePlace = state;
});

addNetworkHandler("v.civ.collision", function(civilian, state) {
    civilian.collisionsEnabled = state;
});

addNetworkHandler("v.civ.threat.add", function(civilian, threat) {
    civilian.setThreatSearch(threat);
});

addNetworkHandler("v.civ.threat.heed", function(civilian, state) {
    civilian.heedThreats = state;
});

addNetworkHandler("v.civ.threat.clr", function(civilian) {
    civilian.clearThreatSearch();
});

addNetworkHandler("v.civ.veh.enter", function(civilian, veh, driver) {
    civilian.enterVehicle(veh, driver);
});

addNetworkHandler("v.civ.veh.exit", function(civilian) {
    civilian.exitVehicle();
});

addNetworkHandler("v.civ.veh.warpin", function(civilian, veh, driver) {
    civilian.warpIntoVehicle(veh, driver);
});

addNetworkHandler("v.civ.veh.warpout", function(civilian) {
    civilian.removeFromVehicle();
});

addNetworkHandler("v.civ.veh.seat", function(civilian, seat) {
    civilian.seat = seat;
});

addNetworkHandler("v.civ.type", function(civilian, pedType) {
    civilian.pedType = pedType;
});

addNetworkHandler("v.civ.wanderpath", function(civilian, wanderPath) {
    civilian.setWanderPath(wanderPath);
});

addNetworkHandler("v.civ.say", function(civilian, speechID) {
    civilian.say(speechID);
});

addNetworkHandler("v.civ.scale", function(civilian, scale) {
	let newMatrix = civilian.matrix;
	newMatrix.setScale(scale);
    civilian.matrix = newMatrix;
});

addNetworkHandler("v.civ.anim", function(civilian, animGroup) {
    civilian.animGroup = animGroup;
});

addNetworkHandler("v.civ.removepart", function(civilian, bodyPart) {
    civilian.removeBodyPart(bodyPart);
});

addNetworkHandler("v.civ.objective.pos", function(civilian, objectiveID, x, y, z) {
    civilian.setObjective(objectiveID, x, y, z);
});

addNetworkHandler("v.civ.wep.set", function(civilian, weaponID) {
    civilian.weapon = weaponID;
});

// ----------------------------------------------------------------------------

addNetworkHandler("v.veh.hp", function(vehicle, health) {
    vehicle.health = health;
});

addNetworkHandler("v.veh.type.base", function(vehicle, baseType) {
    vehicle.baseType = baseType;
});

addNetworkHandler("v.veh.subType", function(vehicle, subType) {
    vehicle.subType = subType;
});

addNetworkHandler("v.veh.col.1", function(vehicle, colour1) {
    vehicle.health = colour1;
});

addNetworkHandler("v.veh.col.2", function(vehicle, colour2) {
    vehicle.colour2 = colour2;
});

addNetworkHandler("v.veh.col.3", function(vehicle, colour3) {
	if(!doesGameHaveFourVehicleColours(game.game)) {
		return false;
	}
	
    vehicle.colour3 = colour3;
});

addNetworkHandler("v.veh.col.4", function(vehicle, colour4) {
	if(!doesGameHaveFourVehicleColours(game.game)) {
		return false;
	}
	
    vehicle.colour4 = colour4;
});

addNetworkHandler("v.veh.cruisespeed", function(vehicle, cruiseSpeed) {
    vehicle.setCarCruiseSpeed(cruiseSpeed);
});

addNetworkHandler("v.veh.wander", function(vehicle) {
    vehicle.carWanderRandomly();
});

addNetworkHandler("v.veh.drivestyle", function(vehicle, drivingStyle) {
    vehicle.setDrivingStyle(drivingStyle);
});

addNetworkHandler("v.veh.mission", function(vehicle, mission) {
    vehicle.setCarMission(mission);
});

addNetworkHandler("v.veh.fix", function(vehicle) {
    vehicle.fix();
});

addNetworkHandler("v.veh.siren", function(vehicle, sirenState) {
    vehicle.siren = Number(sirenState);
});

addNetworkHandler("v.veh.taxilight", function(vehicle, taxiLightState) {
    vehicle.setTaxiLight(Number(taxiLightState));
});

// ----------------------------------------------------------------------------

function doesGameHaveFourVehicleColours(gameID) {
	if(gameID == GAME_GTA_SA) {
		return true;
	}
	
	if(gameID == GAME_GTA_IV) {
		return true;
	}

	if(gameID == GAME_GTA_IV_EFLC) {
		return true;
	}	
	
	return false;
}

// ----------------------------------------------------------------------------

function getPosInFrontOfPos(pos, angle, distance) {
	let x = (pos[0]+((Math.cos(angle+(Math.PI/2)))*distance));
	let y = (pos[1]+((Math.sin(angle+(Math.PI/2)))*distance));
	let frontPos = new Vec3(x, y, pos[2]);
	
	return frontPos;
}

// ----------------------------------------------------------------------------