# Реалізація інформаційного та програмного забезпечення


## SQL-скрипт для створення початкового наповнення бази даних

```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb`;

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8;
USE `mydb`;

-- -----------------------------------------------------
-- Table `mydb`.`Role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Role`;

CREATE TABLE IF NOT EXISTS `mydb`.`Role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `roleName` VARCHAR(45) NOT NULL,
  `permission` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`User`;

CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL UNIQUE,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`Media`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Media`;

CREATE TABLE IF NOT EXISTS `mydb`.`Media` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `keywords` VARCHAR(45) NOT NULL,
  `createdAt` DATE NOT NULL,
  `updatedAt` DATE NOT NULL,
  `userId` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Media_User_idx` (`userId` ASC),
  CONSTRAINT `fk_Media_User`
    FOREIGN KEY (`userId`)
    REFERENCES `mydb`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`Admin`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Admin`;

CREATE TABLE IF NOT EXISTS `mydb`.`Admin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`CommentModeration`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`CommentModeration`;

CREATE TABLE IF NOT EXISTS `mydb`.`CommentModeration` (
  `commentId` INT NOT NULL,
  `userId` INT NOT NULL,
  `moderatorId` INT NOT NULL,
  `moderationReason` VARCHAR(45) NULL,
  `moderationDate` DATE NOT NULL,
  `moderationStatus` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`commentId`),
  INDEX `fk_CommentModeration_Admin1_idx` (`moderatorId` ASC),
  INDEX `fk_CommentModeration_User1_idx` (`userId` ASC),
  CONSTRAINT `fk_CommentModeration_Admin1`
    FOREIGN KEY (`moderatorId`)
    REFERENCES `mydb`.`Admin` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_CommentModeration_User1`
    FOREIGN KEY (`userId`)
    REFERENCES `mydb`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`DeleteAccount`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`DeleteAccount`;

CREATE TABLE IF NOT EXISTS `mydb`.`DeleteAccount` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `reason` VARCHAR(45) NULL,
  `date` DATE NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NULL,
  `adminId` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_DeleteAccount_Admin1_idx` (`adminId` ASC),
  CONSTRAINT `fk_DeleteAccount_Admin1`
    FOREIGN KEY (`adminId`)
    REFERENCES `mydb`.`Admin` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`UserRole`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`UserRole`;

CREATE TABLE IF NOT EXISTS `mydb`.`UserRole` (
  `userId` INT NOT NULL,
  `roleId` INT NOT NULL,
  PRIMARY KEY (`userId`, `roleId`),
  CONSTRAINT `fk_UserRole_User`
    FOREIGN KEY (`userId`)
    REFERENCES `mydb`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_UserRole_Role`
    FOREIGN KEY (`roleId`)
    REFERENCES `mydb`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- Insert data into tables
START TRANSACTION;

-- Role
INSERT INTO `mydb`.`Role` (`id`, `roleName`, `permission`) VALUES
(1, 'Admin', 'Full Access'),
(2, 'Editor', 'Edit Content'),
(3, 'Viewer', 'View Content'),
(4, 'Moderator', 'Manage Comments'),
(5, 'Contributor', 'Submit Content');

-- User
INSERT INTO `mydb`.`User` (`id`, `firstName`, `lastName`, `email`, `password`) 
VALUES 
(1, 'John', 'Doe', 'john.doe@example.com', 'password123'),
(2, 'Jane', 'Smith', 'jane.smith@example.com', 'securepassword'),
(3, 'Alice', 'Johnson', 'alice.johnson@example.com', 'mypassword'),
(4, 'George', 'Joestar', 'george.joestar@example.com', 'bestpassword'),
(5, 'Nicole', 'Tesla', 'nicole.tesla@example.com', 'cringepassword');

-- Media
INSERT INTO `mydb`.`Media` (`id`, `title`, `keywords`, `createdAt`, `updatedAt`, `userId`) 
VALUES
(1, 'test.png', 'image', '2018-07-12', '2020-08-12', 1),
(2, 'Metallica.mp3', 'rock,music,guitar', '2019-07-12', '2020-08-12', 2),
(3, 'message.txt', 'text', '2019-03-07', '2020-03-07', 3),
(4, 'recipe.mp4', 'video,cooking', '2019-01-01', '2020-01-01', 4),
(5, 'test.png', 'image', '2018-06-11', '2020-08-12', 5);

-- Admin
INSERT INTO `mydb`.`Admin` (`id`, `name`) VALUES
(1, 'Super Admin'),
(2, 'Moderator Andryi'),
(3, 'Moderator Boris'),
(4, 'Deleted Admin 1'),
(5, 'Deleted Admin 2');

-- CommentModeration
INSERT INTO `mydb`.`CommentModeration` (`commentId`, `userId`, `moderatorId`, `moderationReason`, `moderationDate`, `moderationStatus`) VALUES
(1, 1, 2, 'Inappropriate Language', '2020-08-12', 'Removed'),
(2, 2, 1, 'Spam', '2024-11-13', 'Flagged'),
(3, 3, 3, 'Off-topic', '2020-08-12', 'Removed'),
(4, 4, 4, 'Hate Speech', '2019-01-01', 'Banned'),
(5, 5, 5, 'Misleading Info', '2020-08-12', 'Under Review');

-- DeleteAccount
INSERT INTO `mydb`.`DeleteAccount` (`id`, `userId`, `reason`, `date`, `type`, `description`, `adminId`) VALUES
(1, 3, 'Privacy Concerns', '2024-11-14', 'Permanent', 'User requested account deletion', 1),
(2, 2, 'Inactive Account', '2024-11-13', 'Temporary', 'Account marked as inactive', 2),
(3, 1, 'Too Many Emails', '2024-11-10', 'Temporary', 'User opted for temporary deactivation', 3),
(4, 4, 'Security Issues', '2024-10-01', 'Permanent', 'Security concerns raised by user', 4),
(5, 5, 'Other', '2024-09-15', 'Permanent', 'No specific reason provided', 5);

-- UserRole
INSERT INTO `mydb`.`UserRole` (`userId`, `roleId`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

COMMIT;
```

## RESTfull сервіс для управління даними
### Підключення до бази даних
```js
const mysql = require("mysql");
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "mydb",
});

conn.connect();

module.exports = conn;
```
### Налаштування Express сервера
```js
const express = require("express");
const cors = require("cors");
const router = require("./routes");
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.all("*", (req, res, next) => {
    next(new AppError(`The URL ${req.originalUrl} does not exist`, 404));
});

app.use(errorHandler);

module.exports = app;
```
#### Підключення до порта
```js
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```
### Створення контролерів додатка
#### User controller
```js
const errorFactory = require("../utils/errorFactory");
const conn = require("../services/db");

exports.getAllUsers = (req, res, next) => {
  conn.query("SELECT * FROM User", (err, data) => {
    if (err) return next(errorFactory.databaseError(err.message));
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
};

exports.createUser = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return next(errorFactory.validationError("All user fields are required"));
  }

  const values = [firstName, lastName, email, password];
  conn.query(
    "INSERT INTO User (firstName, lastName, email, password) VALUES (?)",
    [values],
    (err, data) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return next(errorFactory.conflictError("Email already exists"));
        }
        return next(errorFactory.databaseError(err.message));
      }
      res.status(201).json({
        status: "success",
        message: "User successfully created",
        data: { id: data.insertId, firstName, lastName, email },
      });
    }
  );
};

exports.getUserById = (req, res, next) => {
  const { id } = req.params;

  conn.query("SELECT * FROM User WHERE id = ?", [id], (err, data) => {
    if (err) return next(errorFactory.databaseError(err.message));
    if (data.length === 0) {
      return next(errorFactory.notFound("User not found"));
    }
    res.status(200).json({
      status: "success",
      data: data[0],
    });
  });
};

exports.updateUser = (req, res, next) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !password) {
    return next(errorFactory.validationError("Incomplete user data"));
  }

  conn.query(
    "UPDATE User SET firstName = ?, lastName = ?, email = ?, password = ? WHERE id = ?",
    [firstName, lastName, email, password, id],
    (err, result) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return next(errorFactory.conflictError("Email already exists"));
        }
        return next(errorFactory.databaseError(err.message));
      }
      if (result.affectedRows === 0) {
        return next(errorFactory.notFound("User not found"));
      }
      res.status(200).json({
        status: "success",
        message: "User successfully updated",
      });
    }
  );
};

exports.deleteUser = (req, res, next) => {
  const { id } = req.params;

  conn.query("DELETE FROM Media WHERE userId = ?", [id], (err) => {
    if (err) return next(errorFactory.databaseError(err.message));

    conn.query("DELETE FROM User WHERE id = ?", [id], (err, result) => {
      if (err) return next(errorFactory.databaseError(err.message));
      if (result.affectedRows === 0) {
        return next(errorFactory.notFound("User not found"));
      }
      res.status(200).json({
        status: "success",
        message: "User and related media successfully deleted",
      });
    });
  });
};
```
#### Media controller
```js
const errorFactory = require("../utils/errorFactory");
const conn = require("../services/db");

exports.getAllMedia = (req, res, next) => {
  conn.query("SELECT * FROM Media", (err, data) => {
    if (err) return next(errorFactory.databaseError(err.message));
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
};

exports.createMedia = (req, res, next) => {
  const { title, keywords, createdAt, updatedAt, userId } = req.body;

  if (!title || !userId) {
    return next(errorFactory.validationError("Title and userId are required"));
  }

  const values = [title, keywords, createdAt, updatedAt, userId];
  conn.query(
    "INSERT INTO Media (title, keywords, createdAt, updatedAt, userId) VALUES (?)",
    [values],
    (err) => {
      if (err) return next(errorFactory.databaseError(err.message));
      res.status(201).json({
        status: "success",
        message: "Media successfully created!",
      });
    }
  );
};

exports.getMediaById = (req, res, next) => {
  const { id } = req.params;

  conn.query("SELECT * FROM Media WHERE id = ?", [id], (err, data) => {
    if (err) return next(errorFactory.databaseError(err.message));
    if (data.length === 0) {
      return next(errorFactory.notFound("Media not found"));
    }
    res.status(200).json({
      status: "success",
      data: data[0],
    });
  });
};

exports.updateMedia = (req, res, next) => {
  const { id } = req.params;
  const { title, keywords, createdAt, updatedAt, userId } = req.body;

  if (!title || !userId) {
    return next(errorFactory.validationError("Title and userId are required"));
  }

  conn.query(
    "UPDATE Media SET title = ?, keywords = ?, createdAt = ?, updatedAt = ?, userId = ? WHERE id = ?",
    [title, keywords, createdAt, updatedAt, userId, id],
    (err, result) => {
      if (err) return next(errorFactory.databaseError(err.message));
      if (result.affectedRows === 0) {
        return next(errorFactory.notFound("Media not found"));
      }
      res.status(200).json({
        status: "success",
        message: "Media updated successfully",
      });
    }
  );
};

exports.deleteMedia = (req, res, next) => {
  const { id } = req.params;

  conn.query("DELETE FROM Media WHERE id = ?", [id], (err, result) => {
    if (err) return next(errorFactory.databaseError(err.message));
    if (result.affectedRows === 0) {
      return next(errorFactory.notFound("Media not found"));
    }
    res.status(200).json({
      status: "success",
      message: "Media deleted successfully",
    });
  });
};
```
#### Roles controller
```js
const errorFactory = require("../utils/errorFactory");
const conn = require("../services/db");

exports.getAllRoles = (req, res, next) => {
  conn.query("SELECT * FROM Role", (err, data) => {
    if (err) return next(errorFactory.databaseError(err.message));
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
};

exports.createRole = (req, res, next) => {
  const { roleName, permission } = req.body;

  if (!roleName || !permission) {
    return next(errorFactory.validationError("Role name and permission are required"));
  }

  const values = [roleName, permission];
  conn.query(
    "INSERT INTO Role (roleName, permission) VALUES (?)",
    [values],
    (err, data) => {
      if (err) return next(errorFactory.databaseError(err.message));
      res.status(201).json({
        status: "success",
        message: "Role successfully created",
        data: { id: data.insertId, roleName, permission },
      });
    }
  );
};

exports.getRoleById = (req, res, next) => {
  const { id } = req.params;

  conn.query("SELECT * FROM Role WHERE id = ?", [id], (err, data) => {
    if (err) return next(errorFactory.databaseError(err.message));
    if (data.length === 0) {
      return next(errorFactory.notFound("Role not found"));
    }
    res.status(200).json({
      status: "success",
      data: data[0],
    });
  });
};

exports.updateRole = (req, res, next) => {
  const { id } = req.params;
  const { roleName, permission } = req.body;

  if (!roleName || !permission) {
    return next(errorFactory.validationError("Role name and permission are required"));
  }

  conn.query(
    "UPDATE Role SET roleName = ?, permission = ? WHERE id = ?",
    [roleName, permission, id],
    (err, result) => {
      if (err) return next(errorFactory.databaseError(err.message));
      if (result.affectedRows === 0) {
        return next(errorFactory.notFound("Role not found"));
      }
      res.status(200).json({
        status: "success",
        message: "Role successfully updated",
      });
    }
  );
};

exports.deleteRole = (req, res, next) => {
  const { id } = req.params;

  conn.query("DELETE FROM Role WHERE id = ?", [id], (err, result) => {
    if (err) return next(errorFactory.databaseError(err.message));
    if (result.affectedRows === 0) {
      return next(errorFactory.notFound("Role not found"));
    }
    res.status(200).json({
      status: "success",
      message: "Role successfully deleted",
    });
  });
};
```
### Cтворення глобальних обробників помилок
```js
class AppError extends Error {
    constructor(msg, statusCode) {
        super(msg);

        this.statusCode = statusCode;
        this.error = `${statusCode}`.startsWith("4") ? "fail" : "error";
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;
```
```js
const AppError = require("../utils/appError");

const errorFactory = {
  databaseError: (details = null) => new AppError(details || "Database error", 500),
  notFound: (message = "Resource not found") => new AppError(message, 404),
  validationError: (message = "Invalid data provided") => new AppError(message, 400),
  conflictError: (message = "Resource conflict") => new AppError(message, 409),
  customError: (message, statusCode = 500, details = null) =>
    new AppError(message, statusCode, details),
};

module.exports = errorFactory;
```
```js
module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
};
```
### Створення routes
```js
const express = require("express");
const userRoutes = require("./userRoutes");
const mediaRoutes = require("./mediaRoutes");
const roleRoutes = require("./roleRoutes");

const router = express.Router();

router.use("/users", userRoutes);
router.use("/media", mediaRoutes);
router.use("/roles", roleRoutes);

module.exports = router;
```
#### userRoutes
```js
const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.route("/")
    .get(userController.getAllUsers)
    .post(userController.createUser);

router.route("/:id")
    .get(userController.getUserById)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;
```
#### mediaRoutes
```js
const express = require("express");
const mediaController = require("../controllers/mediaController");

const router = express.Router();

router.route("/")
    .get(mediaController.getAllMedia)
    .post(mediaController.createMedia);

router.route("/:id")
    .get(mediaController.getMediaById)
    .put(mediaController.updateMedia)
    .delete(mediaController.deleteMedia);

module.exports = router;
```
#### roleRoutes
```js
const express = require("express");
const roleController = require("../controllers/roleController");

const router = express.Router();

router.route("/")
    .get(roleController.getAllRoles)
    .post(roleController.createRole);

router.route("/:id")
    .get(roleController.getRoleById)
    .put(roleController.updateRole)
    .delete(roleController.deleteRole);

module.exports = router;
```
