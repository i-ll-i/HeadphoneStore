module.exports = (_sequelize, _Sequelize) => {
    const _Headphone = _sequelize.define('headphones', {
        id: {
            type: _Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        images: {
            type: _Sequelize.TEXT,
            allowNull: false
        },
        name: {
            type: _Sequelize.STRING,
            allowNull: false
        },
        prise: {
            type: _Sequelize.FLOAT,
            allowNull: false
        },
        describe: {
            type: _Sequelize.TEXT,
            allowNull: false
        },
        size: {
            type: _Sequelize.INTEGER,
            allowNull: false
        },
        color: {
            type: _Sequelize.STRING,
            allowNull: false
        },
        quantity: {
            type: _Sequelize.INTEGER,
            allowNull: false
        },
        guarantee: {
            type: _Sequelize.INTEGER,
            allowNull: false
        },
        manufacturer: {
            type: _Sequelize.STRING,
            allowNull: false
        },
        type: {
            type: _Sequelize.STRING,
            allowNull: false
        },
        model: {
            type: _Sequelize.STRING,
            allowNull: false
        },
        gamingHeadphones: {
            type: _Sequelize.BOOLEAN,
            allowNull: false
        },
        signalTransmissionMethod: {
            type: _Sequelize.STRING,
            allowNull: false
        },
        typeOfConstruction: {
            type: _Sequelize.STRING,
            allowNull: false
        },
        soundSystemFormat: {
            type: _Sequelize.FLOAT,
            allowNull: false
        },
        headsetFunction: {
            type: _Sequelize.BOOLEAN,
            allowNull: false
        },
        headphoneBaseColor: {
            type: _Sequelize.STRING,
            allowNull: false
        },
        elementColor: {
            type: _Sequelize.STRING,
            allowNull: false
        },
        backlight: {
            type: _Sequelize.BOOLEAN,
            allowNull: false
        },
        fasteningMethod: {
            type: _Sequelize.STRING,
            allowNull: false
        },
        presenceOfWires: {
            type: _Sequelize.BOOLEAN,
            allowNull: false
        },
        typeOfAcousticDesign: {
            type: _Sequelize.STRING,
            allowNull: false
        },
        diaphragmOfRadiators: {
            type: _Sequelize.INTEGER,
            allowNull: false
        },
        minimumReproducibleFrequency: {
            type: _Sequelize.INTEGER,
            allowNull: false
        },
        maximumReproducibleFrequency: {
            type: _Sequelize.INTEGER,
            allowNull: false
        },
        sensitivity: {
            type: _Sequelize.STRING,
            allowNull: false
        },
        resistance: {
            type: _Sequelize.INTEGER,
            allowNull: false
        },
        numberOfEmitters: {
            type: _Sequelize.INTEGER,
            allowNull: false
        },
        typeEmitters: {
            type: _Sequelize.STRING,
            allowNull: false
        },
        microphone: {
            type: _Sequelize.BOOLEAN,
            allowNull: false
        },
        wireconnectionType: {
            type: _Sequelize.STRING,
            allowNull: false
        },
        detachableCable: {
            type: _Sequelize.BOOLEAN,
            allowNull: false
        },
        lengthOfCable: {
            type: _Sequelize.INTEGER,
            allowNull: false
        },
        cablePlugShape: {
            type: _Sequelize.STRING,
            allowNull: false
        },
        additionalCable: {
            type: _Sequelize.BOOLEAN,
            allowNull: false
        },
        adapter: {
            type: _Sequelize.BOOLEAN,
            allowNull: false
        },
        activeNoiseCancellationSystem: {
            type: _Sequelize.BOOLEAN,
            allowNull: false
        },
        volumeControl: {
            type: _Sequelize.BOOLEAN,
            allowNull: false
        },
        functionKeys: {
            type: _Sequelize.BOOLEAN,
            allowNull: false
        },
        MP3: {
            type: _Sequelize.BOOLEAN,
            allowNull: false
        },
        wirelessChargingSupport: {
            type: _Sequelize.BOOLEAN,
            allowNull: false
        },
        headphonesForSports: {
            type: _Sequelize.BOOLEAN,
            allowNull: false
        },
        equipment: {
            type: _Sequelize.STRING,
            allowNull:  false
        },
        weight: {
            type: _Sequelize.INTEGER,
            allowNull: false
        }
    });

    return _Headphone;
};