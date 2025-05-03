-- CreateTable
CREATE TABLE `Room` (
    `roomId` INTEGER NOT NULL AUTO_INCREMENT,
    `roomType` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL,
    `FloorNo` INTEGER NOT NULL,
    `Condition` ENUM('New', 'Good', 'Needs_Repair') NOT NULL,
    `Location` VARCHAR(191) NOT NULL,
    `isCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `isModified` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`roomId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Equipment` (
    `equipmentId` INTEGER NOT NULL AUTO_INCREMENT,
    `Location` VARCHAR(191) NOT NULL,
    `equipmentType` VARCHAR(191) NOT NULL,
    `warranty` VARCHAR(191) NOT NULL,
    `purchaseDate` DATETIME(3) NOT NULL,
    `issueHistory` VARCHAR(191) NOT NULL,
    `condition` ENUM('New', 'Good', 'Needs_Repair') NOT NULL,
    `qrCode` VARCHAR(191) NOT NULL,
    `isCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `isModified` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `isActive` BOOLEAN NOT NULL,

    PRIMARY KEY (`equipmentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Issue` (
    `issueId` INTEGER NOT NULL AUTO_INCREMENT,
    `Location` VARCHAR(191) NOT NULL,
    `equipmentType` VARCHAR(191) NOT NULL,
    `warranty` VARCHAR(191) NOT NULL,
    `purchaseDate` DATETIME(3) NOT NULL,
    `issueHistory` VARCHAR(191) NOT NULL,
    `condition` ENUM('New', 'Good', 'Needs_Repair') NOT NULL,
    `qrCode` VARCHAR(191) NOT NULL,
    `isCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `isModified` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `isActive` BOOLEAN NOT NULL,

    PRIMARY KEY (`issueId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EquipmentType` (
    `equipmentTypeId` INTEGER NOT NULL AUTO_INCREMENT,
    `Types` VARCHAR(191) NOT NULL,
    `Quantity` INTEGER NOT NULL,
    `Title` VARCHAR(191) NOT NULL,
    `Description` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL,
    `dateCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dateModified` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`equipmentTypeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Remarks` (
    `remarkId` INTEGER NOT NULL AUTO_INCREMENT,
    `remark` VARCHAR(191) NOT NULL,
    `dateCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dateModified` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`remarkId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NotificationAsset` (
    `notificationId` INTEGER NOT NULL AUTO_INCREMENT,
    `notificationTitle` VARCHAR(191) NOT NULL,
    `notificationDescription` VARCHAR(191) NOT NULL,
    `dateCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `isActive` BOOLEAN NOT NULL,

    PRIMARY KEY (`notificationId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
