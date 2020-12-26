/**
 * We on purpose do not make this class to have a root provider.
 * So that the application feels free to set up it.
 */
var NgxLoggerImpl = /** @class */ (function () {
    function NgxLoggerImpl() {
    }
    NgxLoggerImpl.prototype.trace = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
    };
    NgxLoggerImpl.prototype.debug = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
    };
    NgxLoggerImpl.prototype.info = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
    };
    NgxLoggerImpl.prototype.log = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
    };
    NgxLoggerImpl.prototype.warn = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
    };
    NgxLoggerImpl.prototype.error = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
    };
    NgxLoggerImpl.prototype.fatal = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
    };
    return NgxLoggerImpl;
}());
export { NgxLoggerImpl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvZ2dlci5pbXBsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1sb2dnZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbmd4LWxvZ2dlci5pbXBsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOzs7R0FHRztBQUNIO0lBQUE7SUFlQSxDQUFDO0lBYkcsNkJBQUssR0FBTCxVQUFNLE9BQVk7UUFBRSxvQkFBb0I7YUFBcEIsVUFBb0IsRUFBcEIscUJBQW9CLEVBQXBCLElBQW9CO1lBQXBCLG1DQUFvQjs7SUFBVSxDQUFDO0lBRW5ELDZCQUFLLEdBQUwsVUFBTSxPQUFZO1FBQUUsb0JBQW9CO2FBQXBCLFVBQW9CLEVBQXBCLHFCQUFvQixFQUFwQixJQUFvQjtZQUFwQixtQ0FBb0I7O0lBQVUsQ0FBQztJQUVuRCw0QkFBSSxHQUFKLFVBQUssT0FBWTtRQUFFLG9CQUFvQjthQUFwQixVQUFvQixFQUFwQixxQkFBb0IsRUFBcEIsSUFBb0I7WUFBcEIsbUNBQW9COztJQUFVLENBQUM7SUFFbEQsMkJBQUcsR0FBSCxVQUFJLE9BQVk7UUFBRSxvQkFBb0I7YUFBcEIsVUFBb0IsRUFBcEIscUJBQW9CLEVBQXBCLElBQW9CO1lBQXBCLG1DQUFvQjs7SUFBVSxDQUFDO0lBRWpELDRCQUFJLEdBQUosVUFBSyxPQUFZO1FBQUUsb0JBQW9CO2FBQXBCLFVBQW9CLEVBQXBCLHFCQUFvQixFQUFwQixJQUFvQjtZQUFwQixtQ0FBb0I7O0lBQVUsQ0FBQztJQUVsRCw2QkFBSyxHQUFMLFVBQU0sT0FBWTtRQUFFLG9CQUFvQjthQUFwQixVQUFvQixFQUFwQixxQkFBb0IsRUFBcEIsSUFBb0I7WUFBcEIsbUNBQW9COztJQUFVLENBQUM7SUFFbkQsNkJBQUssR0FBTCxVQUFNLE9BQVk7UUFBRSxvQkFBb0I7YUFBcEIsVUFBb0IsRUFBcEIscUJBQW9CLEVBQXBCLElBQW9CO1lBQXBCLG1DQUFvQjs7SUFBVSxDQUFDO0lBQ3ZELG9CQUFDO0FBQUQsQ0FBQyxBQWZELElBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTmd4TG9nZ2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9uZ3gtbG9nZ2VyLmludGVyZmFjZSc7XG5cbi8qKlxuICogV2Ugb24gcHVycG9zZSBkbyBub3QgbWFrZSB0aGlzIGNsYXNzIHRvIGhhdmUgYSByb290IHByb3ZpZGVyLiBcbiAqIFNvIHRoYXQgdGhlIGFwcGxpY2F0aW9uIGZlZWxzIGZyZWUgdG8gc2V0IHVwIGl0LiBcbiAqL1xuZXhwb3J0IGNsYXNzIE5neExvZ2dlckltcGwgaW1wbGVtZW50cyBJTmd4TG9nZ2VyIHtcblxuICAgIHRyYWNlKG1lc3NhZ2U6IGFueSwgLi4uYWRkaXRpb25hbDogYW55W10pOiB2b2lkIHsgfVxuXG4gICAgZGVidWcobWVzc2FnZTogYW55LCAuLi5hZGRpdGlvbmFsOiBhbnlbXSk6IHZvaWQgeyB9XG5cbiAgICBpbmZvKG1lc3NhZ2U6IGFueSwgLi4uYWRkaXRpb25hbDogYW55W10pOiB2b2lkIHsgfVxuXG4gICAgbG9nKG1lc3NhZ2U6IGFueSwgLi4uYWRkaXRpb25hbDogYW55W10pOiB2b2lkIHsgfVxuXG4gICAgd2FybihtZXNzYWdlOiBhbnksIC4uLmFkZGl0aW9uYWw6IGFueVtdKTogdm9pZCB7IH1cblxuICAgIGVycm9yKG1lc3NhZ2U6IGFueSwgLi4uYWRkaXRpb25hbDogYW55W10pOiB2b2lkIHsgfVxuXG4gICAgZmF0YWwobWVzc2FnZTogYW55LCAuLi5hZGRpdGlvbmFsOiBhbnlbXSk6IHZvaWQgeyB9XG59XG4iXX0=