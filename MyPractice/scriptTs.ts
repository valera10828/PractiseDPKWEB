
// =====================================================
// * TypeScript: Полный конспект для изучения
// * Автор: AI Assistant | Дата: 2025-05-27
// * Файл содержит все основные концепции TypeScript
// =====================================================

// ! ОСНОВНЫЕ ТИПЫ ДАННЫХ
// =====================================================

// * Примитивные типы
let isDone: boolean = false;           // Логический тип
let decimal: number = 6;               // Числовой тип
let color: string = "blue";            // Строковый тип
let bigNumber: bigint = 100n;          // Большие числа
let symbolValue: symbol = Symbol("key"); // Уникальные идентификаторы

// * Массивы
let list: number[] = [1, 2, 3];                    // Массив чисел
let genericList: Array<number> = [1, 2, 3];        // Альтернативный синтаксис
let mixedArray: (string | number)[] = [1, "hello"]; // Массив смешанных типов

// * Кортежи (Tuples) - массивы с фиксированной структурой
let tuple: [string, number] = ["hello", 10];
let namedTuple: [name: string, age: number] = ["Alice", 25]; // С именованными полями

// * Перечисления (Enums)
enum Color {
    Red,     // 0
    Green,   // 1
    Blue     // 2
}

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

// * Объекты
let obj: object = { key: "value" };
let person: { name: string; age: number } = { name: "Alice", age: 25 };

// * Специальные типы
let anyValue: any = 4;              // Отключает проверку типов
let unknownValue: unknown = 4;      // Безопасная альтернатива any
let u: undefined = undefined;       // Неопределенное значение
let n: null = null;                 // Нулевое значение
let v: void = undefined;            // Отсутствие значения (для функций)
// let neverValue: never;           // Тип, который никогда не достигается

// ! ОПЕРАТОРЫ ТИПОВ
// =====================================================

// * Union Types (Объединение типов)
let id: number | string;
id = 101;       // OK
id = "202";     // OK

// * Intersection Types (Пересечение типов)
type Person = { name: string };
type Employee = { role: string };
type PersonEmployee = Person & Employee; // Содержит name И role

// * Type Guards (Защитники типов)
function isString(value: unknown): value is string {
    return typeof value === 'string';
}

// * Type Assertions (Утверждения типов)
let someValue: unknown = "This is a string";
let strLength1: number = (someValue as string).length;     // Современный синтаксис
let strLength2: number = (<string>someValue).length;       // Устаревший синтаксис

// ! ИНТЕРФЕЙСЫ
// =====================================================

// * Базовый интерфейс
interface User {
    id: number;
    name: string;
    email?: string;              // Опциональное свойство
    readonly createdAt: Date;    // Только для чтения
}

// * Расширение интерфейсов
interface Employee extends User {
    role: string;
    salary: number;
    department?: string;
}

// * Интерфейсы для функций
interface SearchFunc {
    (source: string, subString: string): boolean;
}

// * Интерфейсы для классов
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

// * Интерфейсы с индексными сигнатурами
interface StringArray {
    [index: number]: string;
}

interface NamedValues {
    [key: string]: any;
}

// ! TYPE ALIASES (ПСЕВДОНИМЫ ТИПОВ)
// =====================================================

// * Базовые псевдонимы
type Point = {
    x: number;
    y: number;
};

type ID = string | number;
type EventHandler = (event: Event) => void;

// * Утилитарные типы (Utility Types)
type PartialUser = Partial<User>;              // Все свойства опциональны
type RequiredUser = Required<User>;            // Все свойства обязательны
type ReadonlyUser = Readonly<User>;            // Все свойства только для чтения
type UserKeys = keyof User;                    // Union из ключей
type UserWithoutId = Omit<User, 'id'>;         // Исключает свойство id
type UserNameAndId = Pick<User, 'name' | 'id'>; // Только name и id
type RecordExample = Record<string, number>;    // { [key: string]: number }

// * Условные типы
type NonNullable<T> = T extends null | undefined ? never : T;
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// ! ФУНКЦИИ
// =====================================================

// * Базовое объявление функции
function add(x: number, y: number): number {
    return x + y;
}

// * Стрелочные функции
const multiply = (x: number, y: number): number => x * y;
const square = (x: number) => x * x;

// * Опциональные параметры
function buildName(firstName: string, lastName?: string): string {
    return lastName ? `${firstName} ${lastName}` : firstName;
}

// * Параметры по умолчанию
function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}

// * Rest параметры
function sum(...numbers: number[]): number {
    return numbers.reduce((prev, current) => prev + current, 0);
}

// * Перегрузка функций
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
    return a + b;
}

// * Функции высшего порядка
function createAdder(x: number): (y: number) => number {
    return (y: number) => x + y;
}

const addFive = createAdder(5);
console.log(addFive(10)); // 15

// * Типы функций
type MathOperation = (x: number, y: number) => number;
const subtract: MathOperation = (x, y) => x - y;
const divide: MathOperation = (x, y) => x / y;

// * Контекст this в функциях
interface Counter {
    count: number;
    increment(this: Counter): void;
    decrement(this: Counter): void;
}

// ! КЛАССЫ
// =====================================================

// * Базовый класс
class Animal {
    // Свойства класса
    name: string;

    // Модификаторы доступа
    private _id: number;                  // Приватное свойство
    protected age: number;                // Защищенное свойство
    readonly species: string;             // Только для чтения

    // Статические свойства
    static totalAnimals: number = 0;

    // Конструктор
    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
        this._id = Math.random();
        Animal.totalAnimals++;
    }

    // Геттеры и сеттеры
    get id(): number {
        return this._id;
    }

    get animalAge(): number {
        return this.age;
    }

    set animalAge(newAge: number) {
        if (newAge > 0) {
            this.age = newAge;
        }
    }

    // Методы экземпляра
    makeSound(): void {
        console.log("Some generic animal sound");
    }

    getInfo(): string {
        return `${this.name} is ${this.age} years old`;
    }

    // Статические методы
    static getAnimalCount(): number {
        return Animal.totalAnimals;
    }
}

// * Наследование
class Dog extends Animal {
    breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age, "Canis lupus"); // Вызов конструктора родителя
        this.breed = breed;
    }

    // Переопределение метода
    override makeSound(): void {
        console.log("Woof! Woof!");
    }

    // Дополнительные методы
    bark(): void {
        console.log(`${this.name} is barking!`);
    }
}

// * Абстрактные классы
abstract class Shape {
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    // Абстрактный метод - должен быть реализован в наследниках
    abstract calculateArea(): number;

    // Обычный метод
    displayInfo(): void {
        console.log(`This ${this.constructor.name} is ${this.color}`);
    }
}

// * Реализация абстрактного класса
class Circle extends Shape {
    radius: number;

    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(color: string, width: number, height: number) {
        super(color);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

// * Реализация интерфейсов
interface Flyable {
    fly(): void;
    altitude: number;
}

interface Swimmable {
    swim(): void;
    depth: number;
}

class Duck extends Animal implements Flyable, Swimmable {
    altitude: number = 0;
    depth: number = 0;

    constructor(name: string, age: number) {
        super(name, age, "Anas platyrhynchos");
    }

    fly(): void {
        this.altitude = 100;
        console.log(`${this.name} is flying at ${this.altitude}m`);
    }

    swim(): void {
        this.depth = 2;
        console.log(`${this.name} is swimming at ${this.depth}m depth`);
    }

    override makeSound(): void {
        console.log("Quack! Quack!");
    }
}

// ! GENERICS (ОБОБЩЕНИЯ)
// =====================================================

// * Обобщённые функции
function identity<T>(arg: T): T {
    return arg;
}

// Использование обобщённых функций
let stringOutput = identity<string>("myString");   // Явное указание типа
let numberOutput = identity(42);                   // Автоматический вывод типа

// * Обобщённые функции с ограничениями
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length); // Теперь мы знаем, что у arg есть свойство length
    return arg;
}

// * Обобщённые интерфейсы
interface GenericIdentityFn<T> {
    (arg: T): T;
}

interface Repository<T> {
    findById(id: string): T | undefined;
    save(item: T): void;
    delete(id: string): boolean;
}

// * Обобщённые классы
class GenericBox<T> {
    private _contents: T;

    constructor(value: T) {
        this._contents = value;
    }

    get contents(): T {
        return this._contents;
    }

    set contents(value: T) {
        this._contents = value;
    }
}

// Использование обобщённых классов
const stringBox = new GenericBox<string>("Hello World");
const numberBox = new GenericBox<number>(42);

// * Более сложные обобщения
class DataStore<T> {
    private data: T[] = [];

    add(item: T): void {
        this.data.push(item);
    }

    get(index: number): T | undefined {
        return this.data[index];
    }

    find(predicate: (item: T) => boolean): T | undefined {
        return this.data.find(predicate);
    }

    filter(predicate: (item: T) => boolean): T[] {
        return this.data.filter(predicate);
    }

    map<U>(mapper: (item: T) => U): U[] {
        return this.data.map(mapper);
    }
}

// * Ограничения обобщений с keyof
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// * Условные типы в обобщениях
type ApiResponse<T> = T extends string ? string : T extends number ? number : object;

// ! ПРОДВИНУТЫЕ ТИПЫ
// =====================================================

// * Mapped Types (Отображаемые типы)
type OptionalFields<T> = {
    [P in keyof T]?: T[P];
};

type ReadonlyFields<T> = {
    readonly [P in keyof T]: T[P];
};

// * Template Literal Types
type World = "world";
type Greeting = `hello ${World}`;                    // "hello world"

type EventName<T extends string> = `on${Capitalize<T>}`;
type ClickEvent = EventName<"click">;                // "onClick"

// * Recursive Types (Рекурсивные типы)
type JsonPrimitive = string | number | boolean | null;
type JsonObject = { [key: string]: JsonValue };
type JsonArray = JsonValue[];
type JsonValue = JsonPrimitive | JsonObject | JsonArray;

// * Discriminated Unions (Дискриминируемые объединения)
type Shape2D =
    | { kind: 'circle'; radius: number }
    | { kind: 'rectangle'; width: number; height: number }
    | { kind: 'triangle'; base: number; height: number };

function calculateArea(shape: Shape2D): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'rectangle':
            return shape.width * shape.height;
        case 'triangle':
            return (shape.base * shape.height) / 2;
        default:
            // TypeScript проверит, что все случаи обработаны
            const _exhaustive: never = shape;
            return _exhaustive;
    }
}

// ! МОДУЛИ И NAMESPACE
// =====================================================

// * Экспорт типов и значений
export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

export type ProductFilter = (product: Product) => boolean;

export function calculateTotal(products: Product[]): number {
    return products.reduce((sum, product) => sum + product.price, 0);
}

export default class ProductService {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    getProducts(): Product[] {
        return [...this.products];
    }

    filterProducts(filter: ProductFilter): Product[] {
        return this.products.filter(filter);
    }
}

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
namespace Validation {
    export interface StringValidator {
        isValid(s: string): boolean;
    }

    export class EmailValidator implements StringValidator {
        isValid(s: string): boolean {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(s);
        }
    }

    export class URLValidator implements StringValidator {
        isValid(s: string): boolean {
            try {
                new URL(s);
                return true;
            } catch {
                return false;
            }
        }
    }

    export function validate(s: string, validator: StringValidator): boolean {
        return validator.isValid(s);
    }
}

// Использование namespace
const emailValidator = new Validation.EmailValidator();
const isValidEmail = Validation.validate("test@example.com", emailValidator);

// ! ДЕКОРАТОРЫ
// =====================================================

// TODO: Для использования декораторов нужно включить experimentalDecorators в tsconfig.json

// * Декоратор класса
function Component(selector: string) {
    return function<T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            selector = selector;

            render() {
                console.log(`Rendering component with selector: ${selector}`);
            }
        };
    };
}

// * Декоратор метода
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        console.log(`Calling ${propertyKey} with arguments:`, args);
        const result = originalMethod.apply(this, args);
        console.log(`Method ${propertyKey} returned:`, result);
        return result;
    };
}

// * Декоратор свойства
function Default(value: any) {
    return function(target: any, propertyKey: string) {
        target[propertyKey] = value;
    };
}

// * Декоратор параметра
function Required(target: any, propertyKey: string, parameterIndex: number) {
    const existingRequiredParameters: number[] =
        Reflect.getOwnMetadata('required', target, propertyKey) || [];
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
function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchUserData(id: number): Promise<User> {
    return new Promise((resolve, reject) => {
        // Симуляция API запроса
        setTimeout(() => {
            if (id > 0) {
                resolve({
                    id,
                    name: `User ${id}`,
                    email: `user${id}@example.com`,
                    createdAt: new Date()
                });
            } else {
                reject(new Error('Invalid user ID'));
            }
        }, 1000);
    });
}

// * Использование Promise
fetchUserData(1)
    .then(user => console.log('User loaded:', user))
    .catch(error => console.error('Error:', error))
    .finally(() => console.log('Request completed'));

// * Async/await
async function loadUserProfile(userId: number): Promise<string> {
    try {
        console.log('Loading user...');
        const user = await fetchUserData(userId);

        console.log('Adding delay...');
        await delay(500);

        return `Profile: ${user.name} (${user.email})`;
    } catch (error) {
        console.error('Failed to load user:', error);
        return 'Profile not available';
    }
}

// * Параллельное выполнение
async function loadMultipleUsers(ids: number[]): Promise<User[]> {
    const promises = ids.map(id => fetchUserData(id));

    try {
        return await Promise.all(promises);
    } catch (error) {
        console.error('Failed to load some users:', error);
        return [];
    }
}

// * Promise.allSettled для обработки частичных ошибок
async function loadUsersWithPartialFailure(ids: number[]): Promise<User[]> {
    const promises = ids.map(id => fetchUserData(id));
    const results = await Promise.allSettled(promises);

    return results
        .filter((result): result is PromiseFulfilledResult<User> => result.status === 'fulfilled')
        .map(result => result.value);
}

// * Race condition - кто быстрее
async function loadUserWithTimeout(id: number, timeoutMs: number): Promise<User> {
    const userPromise = fetchUserData(id);
    const timeoutPromise = delay(timeoutMs).then(() => {
        throw new Error('Request timeout');
    });

    return Promise.race([userPromise, timeoutPromise]);
}

// ! РАБОТА С ОШИБКАМИ
// =====================================================

// * Создание пользовательских классов ошибок
class ValidationError extends Error {
    constructor(
        message: string,
        public field: string,
        public code: string
    ) {
        super(message);
        this.name = 'ValidationError';

        // Восстановление прототипа для корректного instanceof
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}

class NetworkError extends Error {
    constructor(
        message: string,
        public statusCode: number,
        public response?: any
    ) {
        super(message);
        this.name = 'NetworkError';
        Object.setPrototypeOf(this, NetworkError.prototype);
    }
}

// * Функции для обработки ошибок
function validateUser(user: Partial<User>): User {
    if (!user.name || user.name.trim().length === 0) {
        throw new ValidationError('Name is required', 'name', 'REQUIRED');
    }

    if (!user.id || user.id <= 0) {
        throw new ValidationError('Valid ID is required', 'id', 'INVALID');
    }

    return user as User;
}

// * Обработка разных типов ошибок
async function processUser(userData: Partial<User>): Promise<string> {
    try {
        const user = validateUser(userData);
        const profile = await loadUserProfile(user.id);
        return profile;
    } catch (error) {
        if (error instanceof ValidationError) {
            return `Validation error in ${error.field}: ${error.message}`;
        } else if (error instanceof NetworkError) {
            return `Network error (${error.statusCode}): ${error.message}`;
        } else if (error instanceof Error) {
            return `Unexpected error: ${error.message}`;
        } else {
            return 'Unknown error occurred';
        }
    }
}

// * Result pattern для функционального обработки ошибок
type Result<T, E = Error> =
    | { success: true; data: T }
    | { success: false; error: E };

function safeParseJSON<T>(json: string): Result<T> {
    try {
        const data = JSON.parse(json) as T;
        return { success: true, data };
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error : new Error('Unknown parsing error')
        };
    }
}

// Использование Result pattern
const jsonResult = safeParseJSON<User>('{"id": 1, "name": "John"}');
if (jsonResult.success) {
    console.log('Parsed user:', jsonResult.data);
} else {
    console.error('Parse error:', jsonResult.error.message);
}

// ! ТИПИЗАЦИЯ DOM И WEB API
// =====================================================

// * Типизация DOM элементов
const button = document.getElementById('submit-btn') as HTMLButtonElement;
const input = document.querySelector<HTMLInputElement>('#user-input');
const form = document.forms.namedItem('user-form') as HTMLFormElement;

// * Обработка событий с типизацией
button?.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault();
    console.log(`Button clicked at (${event.clientX}, ${event.clientY})`);
});

input?.addEventListener('input', (event: Event) => {
    const target = event.target as HTMLInputElement;
    console.log('Input value:', target.value);
});

// * Типизация для Fetch API
interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new NetworkError(
                `HTTP ${response.status}: ${response.statusText}`,
                response.status
            );
        }

        const json = await response.json();
        return json as ApiResponse<T>;
    } catch (error) {
        if (error instanceof NetworkError) {
            throw error;
        }
        throw new NetworkError('Network request failed', 0, error);
    }
}

// * Типизация для LocalStorage
class TypedStorage {
    static setItem<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getItem<T>(key: string): T | null {
        const item = localStorage.getItem(key);
        if (item === null) return null;

        try {
            return JSON.parse(item) as T;
        } catch {
            return null;
        }
    }

    static removeItem(key: string): void {
        localStorage.removeItem(key);
    }
}

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
    "src/**/*",                       // Включить все файлы в src
"types/**/*"                      // Включить типы
],
"exclude": [
    "node_modules",                   // Исключить node_modules
    "dist",                           // Исключить скомпилированные файлы
    "**/*.test.ts"                    // Исключить тестовые файлы
]
}
*/

// ! ЛУЧШИЕ ПРАКТИКИ И СОВЕТЫ
// =====================================================

// TODO: Всегда указывайте типы для параметров функций и возвращаемых значений

// ! Избегайте использования any - используйте unknown для большей безопасности
function processUnknownData(data: unknown): string {
    if (typeof data === 'string') {
        return data.toUpperCase();
    } else if (typeof data === 'number') {
        return data.toString();
    } else {
        return 'Unknown data type';
    }
}

// * Используйте readonly для неизменяемых данных
function calculateSum(numbers: readonly number[]): number {
    // numbers.push(1); // Ошибка компиляции!
    return numbers.reduce((sum, num) => sum + num, 0);
}

// * Используйте строгие типы вместо примитивов
type UserId = string & { readonly brand: unique symbol };
type Email = string & { readonly brand: unique symbol };

function createUserId(id: string): UserId {
    return id as UserId;
}

function createEmail(email: string): Email {
    if (!email.includes('@')) {
        throw new ValidationError('Invalid email format', 'email', 'FORMAT');
    }
    return email as Email;
}

// * Используйте assertion functions для runtime проверок
function assertIsNumber(value: unknown): asserts value is number {
    if (typeof value !== 'number') {
        throw new Error(`Expected number, got ${typeof value}`);
    }
}

// * Паттерн Builder для сложных объектов
class UserBuilder {
    private user: Partial<User> = {};

    setId(id: number): this {
        this.user.id = id;
        return this;
    }

    setName(name: string): this {
        this.user.name = name;
        return this;
    }

    setEmail(email: string): this {
        this.user.email = email;
        return this;
    }

    build(): User {
        if (!this.user.id || !this.user.name) {
            throw new ValidationError('ID and name are required', 'user', 'INCOMPLETE');
        }

        return {
            ...this.user,
            createdAt: new Date()
        } as User;
    }
}

// Использование Builder
const newUser = new UserBuilder()
    .setId(1)
    .setName('John Doe')
    .setEmail('john@example.com')
    .build();

// * Функциональные хелперы с типизацией
const pipe = <T>(...fns: Array<(arg: T) => T>) => (value: T): T =>
    fns.reduce((acc, fn) => fn(acc), value);

const compose = <T>(...fns: Array<(arg: T) => T>) => (value: T): T =>
    fns.reduceRight((acc, fn) => fn(acc), value);

// Использование pipe и compose
const processString = pipe(
    (str: string) => str.toLowerCase(),
    (str: string) => str.trim(),
    (str: string) => str.replace(/\s+/g, '-')
);

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