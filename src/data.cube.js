/**
## data.**cube**(*string* id, *string* caption)

This object describes an OLAP cube. It has the following functions:

* *mixed* data.cube.**id**([*string* id])
* *mixed* data.cube.**caption**([*string* caption])
* *boolean* data.cube.**equals**(*data.cube* other)

`id` and `caption` are getters/setters.
**/
analytics.data.cube = function (id, caption, description) {

  var _id = id;
  var _caption = caption;
  var _description = description;

  // returned object
  var _cube = {};

  _cube.id = function(id) {
    if (!arguments.length) return _id;
    _id = id;
    return _cube;
  };

  _cube.caption = function(caption) {
    if (!arguments.length) return _caption;
    _caption = caption;
    return _cube;
  };

   _cube.description = function(description) {
    if (!arguments.length) return _description;
    _description = description;
    return _cube;
  };

  _cube.equals = function (other) {
    return (typeof other.id == "function") && (_id === other.id());
  };

  return _cube;
};
