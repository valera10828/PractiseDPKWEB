"use strict";
// =====================================================
// * TypeScript: Полный конспект для изучения
// * Автор: AI Assistant | Дата: 2025-05-27
// * Файл содержит все основные концепции TypeScript
// =====================================================
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotal = calculateTotal;
// ! ОСНОВНЫЕ ТИПЫ ДАННЫХ
// =====================================================
// * Примитивные типы
var isDone = false; // Логический тип
var decimal = 6; // Числовой тип
var color = "blue"; // Строковый тип
var bigNumber = 100n; // Большие числа
var symbolValue = Symbol("key"); // Уникальные идентификаторы
// * Массивы
var list = [1, 2, 3]; // Массив чисел
var genericList = [1, 2, 3]; // Альтернативный синтаксис
var mixedArray = [1, "hello"]; // Массив смешанных типов
// * Кортежи (Tuples) - массивы с фиксированной структурой
var tuple = ["hello", 10];
var namedTuple = ["Alice", 25]; // С именованными полями
// * Перечисления (Enums)
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
// * Объекты
var obj = { key: "value" };
var person = { name: "Alice", age: 25 };
// * Специальные типы
var anyValue = 4; // Отключает проверку типов
var unknownValue = 4; // Безопасная альтернатива any
var u = undefined; // Неопределенное значение
var n = null; // Нулевое значение
var v = undefined; // Отсутствие значения (для функций)
// let neverValue: never;           // Тип, который никогда не достигается
// ! ОПЕРАТОРЫ ТИПОВ
// =====================================================
// * Union Types (Объединение типов)
var id;
id = 101; // OK
id = "202"; // OK
// * Type Guards (Защитники типов)
function isString(value) {
    return typeof value === 'string';
}
// * Type Assertions (Утверждения типов)
var someValue = "This is a string";
var strLength1 = someValue.length; // Современный синтаксис
var strLength2 = someValue.length; // Устаревший синтаксис
// ! ФУНКЦИИ
// =====================================================
// * Базовое объявление функции
function add(x, y) {
    return x + y;
}
// * Стрелочные функции
var multiply = function (x, y) { return x * y; };
var square = function (x) { return x * x; };
// * Опциональные параметры
function buildName(firstName, lastName) {
    return lastName ? "".concat(firstName, " ").concat(lastName) : firstName;
}
// * Параметры по умолчанию
function greet(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", ").concat(name, "!");
}
// * Rest параметры
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (prev, current) { return prev + current; }, 0);
}
function combine(a, b) {
    return a + b;
}
// * Функции высшего порядка
function createAdder(x) {
    return function (y) { return x + y; };
}
var addFive = createAdder(5);
console.log(addFive(10)); // 15
var subtract = function (x, y) { return x - y; };
var divide = function (x, y) { return x / y; };
// ! КЛАССЫ
// =====================================================
// * Базовый класс
var Animal = /** @class */ (function () {
    // Конструктор
    function Animal(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
        this._id = Math.random();
        Animal.totalAnimals++;
    }
    Object.defineProperty(Animal.prototype, "id", {
        // Геттеры и сеттеры
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "animalAge", {
        get: function () {
            return this.age;
        },
        set: function (newAge) {
            if (newAge > 0) {
                this.age = newAge;
            }
        },
        enumerable: false,
        configurable: true
    });
    // Методы экземпляра
    Animal.prototype.makeSound = function () {
        console.log("Some generic animal sound");
    };
    Animal.prototype.getInfo = function () {
        return "".concat(this.name, " is ").concat(this.age, " years old");
    };
    // Статические методы
    Animal.getAnimalCount = function () {
        return Animal.totalAnimals;
    };
    // Статические свойства
    Animal.totalAnimals = 0;
    return Animal;
}());
// * Наследование
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, breed) {
        var _this = _super.call(this, name, age, "Canis lupus") || this; // Вызов конструктора родителя
        _this.breed = breed;
        return _this;
    }
    // Переопределение метода
    Dog.prototype.makeSound = function () {
        console.log("Woof! Woof!");
    };
    // Дополнительные методы
    Dog.prototype.bark = function () {
        console.log("".concat(this.name, " is barking!"));
    };
    return Dog;
}(Animal));
// * Абстрактные классы
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    // Обычный метод
    Shape.prototype.displayInfo = function () {
        console.log("This ".concat(this.constructor.name, " is ").concat(this.color));
    };
    return Shape;
}());
// * Реализация абстрактного класса
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, radius) {
        var _this = _super.call(this, color) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, width, height) {
        var _this = _super.call(this, color) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var Duck = /** @class */ (function (_super) {
    __extends(Duck, _super);
    function Duck(name, age) {
        var _this = _super.call(this, name, age, "Anas platyrhynchos") || this;
        _this.altitude = 0;
        _this.depth = 0;
        return _this;
    }
    Duck.prototype.fly = function () {
        this.altitude = 100;
        console.log("".concat(this.name, " is flying at ").concat(this.altitude, "m"));
    };
    Duck.prototype.swim = function () {
        this.depth = 2;
        console.log("".concat(this.name, " is swimming at ").concat(this.depth, "m depth"));
    };
    Duck.prototype.makeSound = function () {
        console.log("Quack! Quack!");
    };
    return Duck;
}(Animal));
// ! GENERICS (ОБОБЩЕНИЯ)
// =====================================================
// * Обобщённые функции
function identity(arg) {
    return arg;
}
// Использование обобщённых функций
var stringOutput = identity("myString"); // Явное указание типа
var numberOutput = identity(42); // Автоматический вывод типа
function loggingIdentity(arg) {
    console.log(arg.length); // Теперь мы знаем, что у arg есть свойство length
    return arg;
}
// * Обобщённые классы
var GenericBox = /** @class */ (function () {
    function GenericBox(value) {
        this._contents = value;
    }
    Object.defineProperty(GenericBox.prototype, "contents", {
        get: function () {
            return this._contents;
        },
        set: function (value) {
            this._contents = value;
        },
        enumerable: false,
        configurable: true
    });
    return GenericBox;
}());
// Использование обобщённых классов
var stringBox = new GenericBox("Hello World");
var numberBox = new GenericBox(42);
// * Более сложные обобщения
var DataStore = /** @class */ (function () {
    function DataStore() {
        this.data = [];
    }
    DataStore.prototype.add = function (item) {
        this.data.push(item);
    };
    DataStore.prototype.get = function (index) {
        return this.data[index];
    };
    DataStore.prototype.find = function (predicate) {
        return this.data.find(predicate);
    };
    DataStore.prototype.filter = function (predicate) {
        return this.data.filter(predicate);
    };
    DataStore.prototype.map = function (mapper) {
        return this.data.map(mapper);
    };
    return DataStore;
}());
// * Ограничения обобщений с keyof
function getProperty(obj, key) {
    return obj[key];
}
function calculateArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * Math.pow(shape.radius, 2);
        case 'rectangle':
            return shape.width * shape.height;
        case 'triangle':
            return (shape.base * shape.height) / 2;
        default:
            // TypeScript проверит, что все случаи обработаны
            var _exhaustive = shape;
            return _exhaustive;
    }
}
function calculateTotal(products) {
    return products.reduce(function (sum, product) { return sum + product.price; }, 0);
}
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.products = [];
    }
    ProductService.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    ProductService.prototype.getProducts = function () {
        return __spreadArray([], this.products, true);
    };
    ProductService.prototype.filterProducts = function (filter) {
        return this.products.filter(filter);
    };
    return ProductService;
}());
exports.default = ProductService;
// * Импорт (используется в других файлах)
/*
// Именованный импорт
import { Product, calculateTotal } from './product';

// Импорт всего модуля
import * as ProductModule from './product';

// Импорт по умолчанию
import ProductService from './product';

// Смешанный импорт
import ProductService, { Product, calculateTotal } from './product';
*/
// * Namespace (пространства имён)
var Validation;
(function (Validation) {
    var EmailValidator = /** @class */ (function () {
        function EmailValidator() {
        }
        EmailValidator.prototype.isValid = function (s) {
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(s);
        };
        return EmailValidator;
    }());
    Validation.EmailValidator = EmailValidator;
    var URLValidator = /** @class */ (function () {
        function URLValidator() {
        }
        URLValidator.prototype.isValid = function (s) {
            try {
                new URL(s);
                return true;
            }
            catch (_a) {
                return false;
            }
        };
        return URLValidator;
    }());
    Validation.URLValidator = URLValidator;
    function validate(s, validator) {
        return validator.isValid(s);
    }
    Validation.validate = validate;
})(Validation || (Validation = {}));
// Использование namespace
var emailValidator = new Validation.EmailValidator();
var isValidEmail = Validation.validate("test@example.com", emailValidator);
// ! ДЕКОРАТОРЫ
// =====================================================
// TODO: Для использования декораторов нужно включить experimentalDecorators в tsconfig.json
// * Декоратор класса
function Component(selector) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.selector = selector;
                return _this;
            }
            class_1.prototype.render = function () {
                console.log("Rendering component with selector: ".concat(selector));
            };
            return class_1;
        }(constructor));
    };
}
// * Декоратор метода
function Log(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Calling ".concat(propertyKey, " with arguments:"), args);
        var result = originalMethod.apply(this, args);
        console.log("Method ".concat(propertyKey, " returned:"), result);
        return result;
    };
}
// * Декоратор свойства
function Default(value) {
    return function (target, propertyKey) {
        target[propertyKey] = value;
    };
}
// * Декоратор параметра
function Required(target, propertyKey, parameterIndex) {
    var existingRequiredParameters = Reflect.getOwnMetadata('required', target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata('required', existingRequiredParameters, target, propertyKey);
}
// ? Пример использования декораторов
/*
@Component('app-user')
class UserComponent {
  @Default('Anonymous')
  name: string;

  @Log
  greet(@Required message: string): string {
    return `Hello, ${message}!`;
  }
}
*/
// ! АСИНХРОННОЕ ПРОГРАММИРОВАНИЕ
// =====================================================
// * Promise
function delay(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
function fetchUserData(id) {
    return new Promise(function (resolve, reject) {
        // Симуляция API запроса
        setTimeout(function () {
            if (id > 0) {
                resolve({
                    id: id,
                    name: "User ".concat(id),
                    email: "user".concat(id, "@example.com"),
                    createdAt: new Date()
                });
            }
            else {
                reject(new Error('Invalid user ID'));
            }
        }, 1000);
    });
}
// * Использование Promise
fetchUserData(1)
    .then(function (user) { return console.log('User loaded:', user); })
    .catch(function (error) { return console.error('Error:', error); })
    .finally(function () { return console.log('Request completed'); });
// * Async/await
function loadUserProfile(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var user, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    console.log('Loading user...');
                    return [4 /*yield*/, fetchUserData(userId)];
                case 1:
                    user = _a.sent();
                    console.log('Adding delay...');
                    return [4 /*yield*/, delay(500)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, "Profile: ".concat(user.name, " (").concat(user.email, ")")];
                case 3:
                    error_1 = _a.sent();
                    console.error('Failed to load user:', error_1);
                    return [2 /*return*/, 'Profile not available'];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// * Параллельное выполнение
function loadMultipleUsers(ids) {
    return __awaiter(this, void 0, void 0, function () {
        var promises, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    promises = ids.map(function (id) { return fetchUserData(id); });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, Promise.all(promises)];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    error_2 = _a.sent();
                    console.error('Failed to load some users:', error_2);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// * Promise.allSettled для обработки частичных ошибок
function loadUsersWithPartialFailure(ids) {
    return __awaiter(this, void 0, void 0, function () {
        var promises, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    promises = ids.map(function (id) { return fetchUserData(id); });
                    return [4 /*yield*/, Promise.allSettled(promises)];
                case 1:
                    results = _a.sent();
                    return [2 /*return*/, results
                            .filter(function (result) { return result.status === 'fulfilled'; })
                            .map(function (result) { return result.value; })];
            }
        });
    });
}
// * Race condition - кто быстрее
function loadUserWithTimeout(id, timeoutMs) {
    return __awaiter(this, void 0, void 0, function () {
        var userPromise, timeoutPromise;
        return __generator(this, function (_a) {
            userPromise = fetchUserData(id);
            timeoutPromise = delay(timeoutMs).then(function () {
                throw new Error('Request timeout');
            });
            return [2 /*return*/, Promise.race([userPromise, timeoutPromise])];
        });
    });
}
// ! РАБОТА С ОШИБКАМИ
// =====================================================
// * Создание пользовательских классов ошибок
var ValidationError = /** @class */ (function (_super) {
    __extends(ValidationError, _super);
    function ValidationError(message, field, code) {
        var _this = _super.call(this, message) || this;
        _this.field = field;
        _this.code = code;
        _this.name = 'ValidationError';
        // Восстановление прототипа для корректного instanceof
        Object.setPrototypeOf(_this, ValidationError.prototype);
        return _this;
    }
    return ValidationError;
}(Error));
var NetworkError = /** @class */ (function (_super) {
    __extends(NetworkError, _super);
    function NetworkError(message, statusCode, response) {
        var _this = _super.call(this, message) || this;
        _this.statusCode = statusCode;
        _this.response = response;
        _this.name = 'NetworkError';
        Object.setPrototypeOf(_this, NetworkError.prototype);
        return _this;
    }
    return NetworkError;
}(Error));
// * Функции для обработки ошибок
function validateUser(user) {
    if (!user.name || user.name.trim().length === 0) {
        throw new ValidationError('Name is required', 'name', 'REQUIRED');
    }
    if (!user.id || user.id <= 0) {
        throw new ValidationError('Valid ID is required', 'id', 'INVALID');
    }
    return user;
}
// * Обработка разных типов ошибок
function processUser(userData) {
    return __awaiter(this, void 0, void 0, function () {
        var user, profile, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    user = validateUser(userData);
                    return [4 /*yield*/, loadUserProfile(user.id)];
                case 1:
                    profile = _a.sent();
                    return [2 /*return*/, profile];
                case 2:
                    error_3 = _a.sent();
                    if (error_3 instanceof ValidationError) {
                        return [2 /*return*/, "Validation error in ".concat(error_3.field, ": ").concat(error_3.message)];
                    }
                    else if (error_3 instanceof NetworkError) {
                        return [2 /*return*/, "Network error (".concat(error_3.statusCode, "): ").concat(error_3.message)];
                    }
                    else if (error_3 instanceof Error) {
                        return [2 /*return*/, "Unexpected error: ".concat(error_3.message)];
                    }
                    else {
                        return [2 /*return*/, 'Unknown error occurred'];
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function safeParseJSON(json) {
    try {
        var data = JSON.parse(json);
        return { success: true, data: data };
    }
    catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error : new Error('Unknown parsing error')
        };
    }
}
// Использование Result pattern
var jsonResult = safeParseJSON('{"id": 1, "name": "John"}');
if (jsonResult.success) {
    console.log('Parsed user:', jsonResult.data);
}
else {
    console.error('Parse error:', jsonResult.error.message);
}
// ! ТИПИЗАЦИЯ DOM И WEB API
// =====================================================
// * Типизация DOM элементов
var button = document.getElementById('submit-btn');
var input = document.querySelector('#user-input');
var form = document.forms.namedItem('user-form');
// * Обработка событий с типизацией
button === null || button === void 0 ? void 0 : button.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Button clicked at (".concat(event.clientX, ", ").concat(event.clientY, ")"));
});
input === null || input === void 0 ? void 0 : input.addEventListener('input', function (event) {
    var target = event.target;
    console.log('Input value:', target.value);
});
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, json, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new NetworkError("HTTP ".concat(response.status, ": ").concat(response.statusText), response.status);
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    json = _a.sent();
                    return [2 /*return*/, json];
                case 3:
                    error_4 = _a.sent();
                    if (error_4 instanceof NetworkError) {
                        throw error_4;
                    }
                    throw new NetworkError('Network request failed', 0, error_4);
                case 4: return [2 /*return*/];
            }
        });
    });
}
// * Типизация для LocalStorage
var TypedStorage = /** @class */ (function () {
    function TypedStorage() {
    }
    TypedStorage.setItem = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    TypedStorage.getItem = function (key) {
        var item = localStorage.getItem(key);
        if (item === null)
            return null;
        try {
            return JSON.parse(item);
        }
        catch (_a) {
            return null;
        }
    };
    TypedStorage.removeItem = function (key) {
        localStorage.removeItem(key);
    };
    return TypedStorage;
}());
// ! КОНФИГУРАЦИЯ И ИНСТРУМЕНТЫ
// =====================================================
// * Пример tsconfig.json
/*
{
  "compilerOptions": {
    // Основные настройки
    "target": "ES2020",                // Целевая версия JavaScript
    "module": "ESNext",                // Система модулей
    "lib": ["ES2020", "DOM"],          // Включаемые библиотеки

    // Строгость типизации
    "strict": true,                    // Включить все строгие проверки
    "noImplicitAny": true,            // Запретить неявный any
    "strictNullChecks": true,         // Строгая проверка null/undefined
    "strictFunctionTypes": true,      // Строгая типизация функций

    // Разрешение модулей
    "moduleResolution": "node",       // Способ разрешения модулей
    "baseUrl": "./",                  // Базовый путь для разрешения модулей
    "paths": {                        // Псевдонимы путей
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"]
    },

    // Генерация кода
    "outDir": "./dist",               // Папка для скомпилированных файлов
    "rootDir": "./src",               // Корневая папка исходников
    "sourceMap": true,                // Генерировать source maps
    "declaration": true,              // Генерировать .d.ts файлы

    // Дополнительные настройки
    "esModuleInterop": true,          // Совместимость с CommonJS
    "allowSyntheticDefaultImports": true,
    "skipLibCheck": true,             // Пропустить проверку .d.ts файлов
    "forceConsistentCasingInFileNames": true,

    // Экспериментальные функции
    "experimentalDecorators": true,    // Поддержка декораторов
    "emitDecoratorMetadata": true
  },
  "include": [
    "src/**/ 
    * ",                       // Включить все файлы в src;
"types/**/*"; // Включить типы
"exclude";
[
    "node_modules", // Исключить node_modules
    "dist", // Исключить скомпилированные файлы
    "**/*.test.ts" // Исключить тестовые файлы
];
    * /;
// ! ЛУЧШИЕ ПРАКТИКИ И СОВЕТЫ
// =====================================================
// TODO: Всегда указывайте типы для параметров функций и возвращаемых значений
// ! Избегайте использования any - используйте unknown для большей безопасности
function processUnknownData(data) {
    if (typeof data === 'string') {
        return data.toUpperCase();
    }
    else if (typeof data === 'number') {
        return data.toString();
    }
    else {
        return 'Unknown data type';
    }
}
// * Используйте readonly для неизменяемых данных
function calculateSum(numbers) {
    // numbers.push(1); // Ошибка компиляции!
    return numbers.reduce(function (sum, num) { return sum + num; }, 0);
}
function createUserId(id) {
    return id;
}
function createEmail(email) {
    if (!email.includes('@')) {
        throw new ValidationError('Invalid email format', 'email', 'FORMAT');
    }
    return email;
}
// * Используйте assertion functions для runtime проверок
function assertIsNumber(value) {
    if (typeof value !== 'number') {
        throw new Error("Expected number, got ".concat(typeof value));
    }
}
// * Паттерн Builder для сложных объектов
var UserBuilder = /** @class */ (function () {
    function UserBuilder() {
        this.user = {};
    }
    UserBuilder.prototype.setId = function (id) {
        this.user.id = id;
        return this;
    };
    UserBuilder.prototype.setName = function (name) {
        this.user.name = name;
        return this;
    };
    UserBuilder.prototype.setEmail = function (email) {
        this.user.email = email;
        return this;
    };
    UserBuilder.prototype.build = function () {
        if (!this.user.id || !this.user.name) {
            throw new ValidationError('ID and name are required', 'user', 'INCOMPLETE');
        }
        return __assign(__assign({}, this.user), { createdAt: new Date() });
    };
    return UserBuilder;
}());
// Использование Builder
var newUser = new UserBuilder()
    .setId(1)
    .setName('John Doe')
    .setEmail('john@example.com')
    .build();
// * Функциональные хелперы с типизацией
var pipe = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (value) {
        return fns.reduce(function (acc, fn) { return fn(acc); }, value);
    };
};
var compose = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (value) {
        return fns.reduceRight(function (acc, fn) { return fn(acc); }, value);
    };
};
// Использование pipe и compose
var processString = pipe(function (str) { return str.toLowerCase(); }, function (str) { return str.trim(); }, function (str) { return str.replace(/\s+/g, '-'); });
console.log(processString('  Hello World  ')); // "hello-world"
// ? ЗАКЛЮЧЕНИЕ
// =====================================================
// * TypeScript предоставляет мощную систему типов для JavaScript
// * Основные преимущества: безопасность типов, лучшая поддержка IDE,
//   рефакторинг, самодокументирование кода
// * Используйте строгие настройки компилятора для максимальной пользы
// * Изучайте утилитарные типы и продвинутые возможности постепенно
// * Практикуйтесь в написании типобезопасного кода
// ! Это не исчерпывающий список всех возможностей TypeScript,
// ! но хорошая база для начала работы с языком
console.log("🎉 Конспект по TypeScript завершен!");
