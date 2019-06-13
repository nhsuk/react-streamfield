import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';
import uuidv4 from 'uuid';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import AnimateHeight from 'react-animate-height';
import { Tab, TabPanel, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var initializeStreamField = function initializeStreamField(id, data) {
  return {
    type: 'INITIALIZE_STREAM_FIELD',
    id: id,
    data: data
  };
};
var blockUpdated = function blockUpdated(fieldId, blockId) {
  return {
    type: 'BLOCK_UPDATED',
    fieldId: fieldId,
    blockId: blockId
  };
};
var changeBlockValue = function changeBlockValue(fieldId, blockId, value) {
  return {
    type: 'CHANGE_BLOCK_VALUES',
    fieldId: fieldId,
    blockId: blockId,
    value: value
  };
};
var toggleBlock = function toggleBlock(fieldId, blockId) {
  return {
    type: 'TOGGLE_BLOCK',
    fieldId: fieldId,
    blockId: blockId
  };
};
var showBlock = function showBlock(fieldId, blockId) {
  return function (dispatch) {
    return new Promise(function (resolve) {
      setTimeout(resolve, 0.001);
    }).then(function () {
      dispatch({
        type: 'SHOW_BLOCK',
        fieldId: fieldId,
        blockId: blockId
      });
    });
  };
};
var hideBlock = function hideBlock(fieldId, blockId) {
  return {
    type: 'HIDE_BLOCK',
    fieldId: fieldId,
    blockId: blockId
  };
};
var addBlock = function addBlock(fieldId, parentId, index, blockType) {
  return {
    type: 'ADD_BLOCK',
    fieldId: fieldId,
    parentId: parentId,
    index: index,
    blockType: blockType
  };
};
var duplicateBlock = function duplicateBlock(fieldId, blockId) {
  return {
    type: 'DUPLICATE_BLOCK',
    fieldId: fieldId,
    blockId: blockId
  };
};
var moveBlock = function moveBlock(fieldId, blockId, newIndex) {
  return {
    type: 'MOVE_BLOCK',
    fieldId: fieldId,
    blockId: blockId,
    newIndex: newIndex
  };
};
var deleteBlock = function deleteBlock(fieldId, blockId) {
  return {
    type: 'DELETE_BLOCK',
    fieldId: fieldId,
    blockId: blockId
  };
};

var isNA = function isNA(value) {
  return value === null || value === undefined;
};
var getNewId = function getNewId() {
  return uuidv4();
};
var getFieldName = function getFieldName(blockId) {
  return "field-".concat(blockId);
};
var isField = function isField(blockDefinition) {
  return blockDefinition.children === undefined || blockDefinition.children.length === 0;
};
var isStruct = function isStruct(blockDefinition) {
  return blockDefinition.isStruct !== undefined && blockDefinition.isStruct;
};
var isStatic = function isStatic(blockDefinition) {
  return blockDefinition.isStatic !== undefined && blockDefinition.isStatic;
};
var isClosed = function isClosed(blockDefinition) {
  return blockDefinition.closed === undefined || blockDefinition.closed;
};
var shouldRunInnerScripts = function shouldRunInnerScripts(blockDefinition) {
  return blockDefinition.dangerouslyRunInnerScripts !== undefined && blockDefinition.dangerouslyRunInnerScripts;
};
var getLabel = function getLabel(blockDefinition) {
  var key = blockDefinition.key,
      label = blockDefinition.label;

  if (label === undefined) {
    label = key.replace('_', ' ');
    label = "".concat(label[0].toUpperCase()).concat(label.substring(1));
  }

  return label;
};
var getChildrenIds = function getChildrenIds(state, fieldId, parentId) {
  var fieldData = state[fieldId];
  var blocks = fieldData.blocks;

  if (parentId === null) {
    return fieldData.rootBlocks;
  } else {
    return blocks[parentId].value;
  }
};
var getSiblingsIds = function getSiblingsIds(state, fieldId, blockId) {
  var fieldData = state[fieldId];
  var blocks = fieldData.blocks;
  var block = blocks[blockId];
  var parentId = block.parent;

  if (parentId !== null) {
    var parentBlockDefinition = getNestedBlockDefinition(state, fieldId, parentId);

    if (isStruct(parentBlockDefinition)) {
      return [blockId];
    }
  }

  return getChildrenIds(state, fieldId, parentId);
};
var getAncestorsIds = function getAncestorsIds(state, fieldId, blockId) {
  var includeSelf = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var blocks = state[fieldId].blocks;
  var ancestors = [];

  if (includeSelf) {
    ancestors.push(blockId);
  }

  var block = blocks[blockId];

  while (block.parent !== null) {
    blockId = block.parent;
    ancestors.push(blockId);
    block = blocks[blockId];
  }

  return ancestors.reverse();
};
var getDescendantsIds = function getDescendantsIds(state, fieldId, blockId) {
  var includeSelf = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var descendants = [];

  if (includeSelf) {
    descendants.push(blockId);
  }

  var blockDefinition = getNestedBlockDefinition(state, fieldId, blockId);

  if (isField(blockDefinition)) {
    return descendants;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = state[fieldId].blocks[blockId].value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var childBlockId = _step.value;
      descendants = [].concat(_toConsumableArray(descendants), _toConsumableArray(getDescendantsIds(state, fieldId, childBlockId, true)));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return descendants;
};
var getBlockDefinition = function getBlockDefinition(blockDefinitions, type) {
  var blockDefinition = blockDefinitions.find(function (blockDefinition) {
    return blockDefinition.key === type;
  });

  if (blockDefinition === undefined) {
    throw new TypeError("No block definition found for '".concat(type, "'"));
  }

  return blockDefinition;
};
var getNestedBlockDefinition = function getNestedBlockDefinition(state, fieldId, blockId) {
  var fieldData = state[fieldId];
  var blockDefinitions = fieldData.blockDefinitions,
      blocks = fieldData.blocks;
  var blockDefinition;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = getAncestorsIds(state, fieldId, blockId, true)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var ancestorId = _step2.value;
      var block = blocks[ancestorId];
      blockDefinition = getBlockDefinition(blockDefinitions, block.type);
      blockDefinitions = blockDefinition.children;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return blockDefinition;
};
var structValueToObject = function structValueToObject(state, fieldId, structValue) {
  var blocks = state[fieldId].blocks;
  var obj = {};
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = structValue[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var childBlockId = _step3.value;
      var childBlockDefinition = getNestedBlockDefinition(state, fieldId, childBlockId);
      var value = void 0;

      if (isField(childBlockDefinition)) {
        var childBlock = blocks[childBlockId];
        value = childBlock.value;
      } else {
        value = childBlockId;
      }

      obj[childBlockDefinition.key] = value;
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return obj;
};
var getNewBlock = function getNewBlock(parentId, blockDefinition) {
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var extraBlocks = {};
  var childBlockId, childBlock, childExtraBlocks;
  var blockId = getNewId();

  if (isNA(value) && blockDefinition.default !== undefined) {
    value = blockDefinition.default;
  }

  if (isStruct(blockDefinition)) {
    var newValue = [];
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = blockDefinition.children[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var childBlockDefinition = _step4.value;
        var childDefaultValue = null;

        if (!isNA(value)) {
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = value[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var childDefault = _step5.value;

              if (childDefault.type === childBlockDefinition.key) {
                childDefaultValue = childDefault.value;
                break;
              }
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        }

        var _getNewBlock = getNewBlock(blockId, childBlockDefinition, childDefaultValue);

        var _getNewBlock2 = _slicedToArray(_getNewBlock, 3);

        childBlockId = _getNewBlock2[0];
        childBlock = _getNewBlock2[1];
        childExtraBlocks = _getNewBlock2[2];
        newValue.push(childBlockId);
        extraBlocks = _objectSpread({}, extraBlocks, childExtraBlocks, _defineProperty({}, childBlockId, childBlock));
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    value = newValue;
  } else if (!isField(blockDefinition)) {
    var _newValue = [];

    if (!isNA(value)) {
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = value[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var _childBlock = _step6.value;

          var _childBlockDefinition = void 0;

          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = blockDefinition.children[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              _childBlockDefinition = _step7.value;

              if (_childBlockDefinition.key === _childBlock.type) {
                break;
              }
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                _iterator7.return();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }

          var _getNewBlock3 = getNewBlock(blockId, _childBlockDefinition, _childBlock.value);

          var _getNewBlock4 = _slicedToArray(_getNewBlock3, 3);

          childBlockId = _getNewBlock4[0];
          _childBlock = _getNewBlock4[1];
          childExtraBlocks = _getNewBlock4[2];

          _newValue.push(childBlockId);

          extraBlocks = _objectSpread({}, extraBlocks, childExtraBlocks, _defineProperty({}, childBlockId, _childBlock));
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }
    }

    value = _newValue;
  }

  return [blockId, {
    parent: parentId,
    type: blockDefinition.key,
    value: value,
    hidden: true,
    closed: blockDefinition.closed === undefined ? false : blockDefinition.closed,
    collapsible: blockDefinition.collapsible === undefined ? false : blockDefinition.collapsible,
    shouldUpdate: false
  }, extraBlocks];
};
var deepCopy = function deepCopy(data) {
  var copy;

  if (data instanceof FileList) {
    return data;
  }

  if (data instanceof Array) {
    return data.map(function (v) {
      return deepCopy(v);
    });
  }

  if (data instanceof Object) {
    copy = {};

    var _arr = Object.entries(data);

    for (var _i = 0; _i < _arr.length; _i++) {
      var _arr$_i = _slicedToArray(_arr[_i], 2),
          key = _arr$_i[0],
          value = _arr$_i[1];

      copy[key] = deepCopy(value);
    }

    return copy;
  }

  return data;
};
var applyToBlocks = function applyToBlocks(state, fieldId, blocksIds, func) {
  var fieldData = state[fieldId];
  var blocks = fieldData.blocks;
  var _iteratorNormalCompletion8 = true;
  var _didIteratorError8 = false;
  var _iteratorError8 = undefined;

  try {
    for (var _iterator8 = blocksIds[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
      var blockId = _step8.value;
      var block = deepCopy(blocks[blockId]);
      blocks[blockId] = func(block);
    }
  } catch (err) {
    _didIteratorError8 = true;
    _iteratorError8 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
        _iterator8.return();
      }
    } finally {
      if (_didIteratorError8) {
        throw _iteratorError8;
      }
    }
  }

  return _objectSpread({}, state, _defineProperty({}, fieldId, _objectSpread({}, fieldData, {
    blocks: blocks
  })));
};
var applyToBlock = function applyToBlock(state, fieldId, blockId, func) {
  return applyToBlocks(state, fieldId, [blockId], func);
};
var triggerKeyboardEvent = function triggerKeyboardEvent(element, key) {
  var event = new Event('keydown', {
    bubbles: true,
    cancelable: true
  });
  event.key = key; // These four lines

  event.keyIdentifier = key; // are here

  event.keyCode = key; // to fix cross-browser

  event.which = key; // compatibility issues.

  element.dispatchEvent(event);
};
var triggerCustomEvent = function triggerCustomEvent(element, name) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (data === null) {
    data = {};
  }

  var event = new CustomEvent("streamfield:".concat(name), {
    detail: _objectSpread({
      target: element
    }, data)
  });
  element.dispatchEvent(event);
  window.dispatchEvent(event);
};
var replaceWithComponent = function replaceWithComponent(string, placeholder, component) {
  var parts = string.split(new RegExp("(".concat(placeholder, ")")));

  for (var i in parts) {
    var part = parts[i];

    if (part === placeholder) {
      parts[i] = React.createElement(React.Fragment, {
        key: i
      }, component);
    } else {
      parts[i] = React.createElement("span", {
        key: i,
        dangerouslySetInnerHTML: {
          __html: part
        }
      });
    }
  }

  return React.createElement(React.Fragment, null, parts);
};

var getNestedBlocksState = function getNestedBlocksState(parentBlockId, blockDefinitions, blocks) {
  var childrenBlocksIds = [];
  var blocksState = {};
  var descendantsBlocksState = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = blocks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var block = _step.value;
      var blockId = block.id === undefined ? getNewId() : block.id;
      var blockDefinition = blockDefinitions.length === 1 ? blockDefinitions[0] : getBlockDefinition(blockDefinitions, block.type);
      var blockIsField = isField(blockDefinition);
      var value = block.value;

      if (!blockIsField) {
        if (isNA(value)) {
          value = [];
        }

        if (isStruct(blockDefinition)) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            var _loop = function _loop() {
              var childBlockDefinition = _step2.value;
              var childBlockType = childBlockDefinition.key;
              var childBlock = value.find(function (childBlock) {
                return childBlock.type === childBlockType;
              });

              if (childBlock === undefined) {
                var _getNewBlock = getNewBlock(blockId, childBlockDefinition),
                    _getNewBlock2 = _slicedToArray(_getNewBlock, 3),
                    childBlockId = _getNewBlock2[0],
                    _childBlock = _getNewBlock2[1],
                    extraBlocks = _getNewBlock2[2];

                blocksState = _objectSpread({}, blocksState, extraBlocks, _defineProperty({}, childBlockId, _childBlock));
                value.push(_objectSpread({
                  id: childBlockId
                }, _childBlock));
              }
            };

            for (var _iterator2 = blockDefinition.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              _loop();
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }

        var _getNestedBlocksState = getNestedBlocksState(blockId, blockDefinition.children, value);

        var _getNestedBlocksState2 = _slicedToArray(_getNestedBlocksState, 2);

        value = _getNestedBlocksState2[0];
        descendantsBlocksState = _getNestedBlocksState2[1];
        blocksState = _objectSpread({}, blocksState, descendantsBlocksState);
      }

      childrenBlocksIds.push(blockId);
      blocksState[blockId] = {
        parent: parentBlockId,
        type: blockDefinition.key,
        html: block.html,
        hasError: block.hasError,
        value: value,
        hidden: false,
        closed: isClosed(blockDefinition),
        shouldUpdate: false,
        isField: blockIsField
      };
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return [childrenBlocksIds, blocksState];
};
var valueToState = function valueToState(prevState, fieldId, value) {
  var _getNestedBlocksState3 = getNestedBlocksState(null, prevState[fieldId].blockDefinitions, value),
      _getNestedBlocksState4 = _slicedToArray(_getNestedBlocksState3, 2),
      rootBlocks = _getNestedBlocksState4[0],
      blocks = _getNestedBlocksState4[1]; // Delete internal field created only for browsing data.


  var _arr = Object.values(blocks);

  for (var _i = 0; _i < _arr.length; _i++) {
    var block = _arr[_i];
    delete block['isField'];
  }

  return _objectSpread({}, prevState, _defineProperty({}, fieldId, _objectSpread({}, prevState[fieldId], {
    rootBlocks: rootBlocks,
    blocks: blocks
  })));
};
var extractValue = function extractValue(state, fieldId, blockId) {
  var blocks = state[fieldId].blocks;
  var block = blocks[blockId];
  var value = block.value;
  var blockDefinition = getNestedBlockDefinition(state, fieldId, blockId);

  if (!isField(blockDefinition)) {
    value = value.map(function (childBlockId) {
      return extractValue(state, fieldId, childBlockId);
    });
  }

  return {
    id: blockId,
    type: block.type,
    value: value
  };
};
var stateToValue = function stateToValue(state, fieldId) {
  var fieldData = state[fieldId];
  return fieldData.rootBlocks.map(function (blockId) {
    return extractValue(state, fieldId, blockId);
  });
};

var _dec, _class, _class2, _temp;
var AddButton = (_dec = connect(function (state, props) {
  var fieldId = props.fieldId,
      parentId = props.parentId,
      blockId = props.blockId;
  var field = state[fieldId];
  var blockDefinitions;

  if (parentId) {
    blockDefinitions = getNestedBlockDefinition(state, fieldId, parentId).children;
  } else {
    blockDefinitions = field.blockDefinitions;
  }

  var index = 0;

  if (blockId !== undefined) {
    // Incremented by 1 to add after the current block.
    index = getSiblingsIds(state, fieldId, blockId).indexOf(blockId) + 1;
  }

  return {
    blockDefinitions: blockDefinitions,
    index: index,
    icons: field.icons,
    labels: field.labels
  };
}, function (dispatch, props) {
  var fieldId = props.fieldId,
      parentId = props.parentId;
  return bindActionCreators({
    addBlock: function addBlock$1(index, blockType) {
      return addBlock(fieldId, parentId, index, blockType);
    }
  }, dispatch);
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AddButton, _React$Component);

  function AddButton(props) {
    var _this;

    _classCallCheck(this, AddButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddButton).call(this, props));

    _this.toggle = function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (_this.hasChoice) {
        _this.setState(function (state, props) {
          return {
            open: !state.open
          };
        });
      } else {
        _this.props.addBlock(_this.props.index, _this.props.blockDefinitions[0].key);
      }
    };

    _this.addHandler = function (event) {
      _this.props.addBlock(_this.props.index, event.target.closest('button').value);

      _this.toggle(event);
    };

    _this.state = {
      open: props.open
    };
    return _this;
  }

  _createClass(AddButton, [{
    key: "getIcon",
    value: function getIcon(blockDefinition) {
      var icon = blockDefinition.icon;

      if (isNA(icon)) {
        return null;
      }

      return React.createElement("span", {
        className: "c-sf-button__icon",
        dangerouslySetInnerHTML: {
          __html: icon
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          visible = _this$props.visible,
          icons = _this$props.icons,
          labels = _this$props.labels;
      var button = React.createElement("button", {
        onClick: this.toggle,
        title: labels.add,
        className: classNames('c-sf-add-button', visible && 'c-sf-add-button--visible', this.state.open && this.hasChoice && 'c-sf-add-button--closed'),
        dangerouslySetInnerHTML: {
          __html: icons.add
        }
      });

      if (this.hasChoice) {
        return React.createElement(React.Fragment, null, button, React.createElement(AnimateHeight, {
          height: this.panelHeight,
          easing: "ease-in-out",
          contentClassName: "c-sf-add-panel"
        }, Object.entries(this.groupedBlockDefinitions).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              group = _ref2[0],
              blockDefinitions = _ref2[1];

          return React.createElement(React.Fragment, {
            key: group
          }, group ? React.createElement("h4", {
            className: "c-sf-add-panel__group-title"
          }, group) : null, React.createElement("div", {
            className: "c-sf-add-panel__grid"
          }, blockDefinitions.map(function (blockDefinition) {
            return React.createElement("button", {
              key: blockDefinition.key,
              onClick: _this2.addHandler,
              value: blockDefinition.key,
              className: "c-sf-button"
            }, _this2.getIcon(blockDefinition), React.createElement("span", {
              className: "c-sf-button__label"
            }, getLabel(blockDefinition)));
          })));
        })));
      }

      return button;
    }
  }, {
    key: "hasChoice",
    get: function get() {
      return this.props.blockDefinitions.length !== 1;
    }
  }, {
    key: "panelHeight",
    get: function get() {
      return this.state.open && this.props.visible ? 'auto' : 0;
    }
  }, {
    key: "groupedBlockDefinitions",
    get: function get() {
      var grouped = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.props.blockDefinitions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var blockDefinition = _step.value;
          var key = blockDefinition.group || '';
          var others = grouped[key] || [];
          others.push(blockDefinition);
          grouped[key] = others;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return grouped;
    }
  }]);

  return AddButton;
}(React.Component), _class2.defaultProps = {
  open: false,
  visible: true
}, _temp)) || _class);
process.env.NODE_ENV !== "production" ? AddButton.propTypes = {
  fieldId: PropTypes.string.isRequired,
  parentId: PropTypes.string,
  blockId: PropTypes.string,
  open: PropTypes.bool,
  visible: PropTypes.bool
} : void 0;

var refType = PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
  current: PropTypes.instanceOf(Element)
})]);

var _dec$1, _class$1, _class2$1, _temp$1;
var NestedBlockHeader = (_dec$1 = connect(function (state, props) {
  var fieldId = props.fieldId,
      blockId = props.blockId;
  var fieldData = state[fieldId];
  var blocks = fieldData.blocks;
  var block = blocks[blockId];
  var blockDefinition = getNestedBlockDefinition(state, fieldId, blockId);
  var value = block.value;
  return {
    blockDefinition: blockDefinition,
    icons: fieldData.icons,
    value: isStruct(blockDefinition) ? structValueToObject(state, fieldId, value) : value
  };
}, function (dispatch, props) {
  var fieldId = props.fieldId,
      blockId = props.blockId;
  return bindActionCreators({
    toggleBlock: function toggleBlock$1() {
      return toggleBlock(fieldId, blockId);
    }
  }, dispatch);
}), _dec$1(_class$1 = (_temp$1 = _class2$1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NestedBlockHeader, _React$Component);

  function NestedBlockHeader() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NestedBlockHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NestedBlockHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.toggle = function () {
      var _this$props = _this.props,
          toggleBlock = _this$props.toggleBlock,
          closed = _this$props.closed;
      toggleBlock();

      _this.triggerCustomEvent('toggle', {
        closed: !closed
      });
    };

    return _this;
  }

  _createClass(NestedBlockHeader, [{
    key: "triggerCustomEvent",
    value: function triggerCustomEvent$1(name) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      triggerCustomEvent(ReactDOM.findDOMNode(this), name, data);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          blockDefinition = _this$props2.blockDefinition,
          fieldId = _this$props2.fieldId,
          blockId = _this$props2.blockId,
          dragHandleProps = _this$props2.dragHandleProps,
          collapsibleBlock = _this$props2.collapsibleBlock,
          dragHandleRef = _this$props2.dragHandleRef;
      return React.createElement("div", _extends({
        ref: dragHandleRef,
        onClick: collapsibleBlock ? this.toggle : null
      }, dragHandleProps, {
        className: classNames('c-sf-nested-block__header', collapsibleBlock && 'c-sf-block__header--collapsible')
      }), React.createElement("span", {
        className: "c-sf-block__header__icon",
        dangerouslySetInnerHTML: {
          __html: blockDefinition.icon
        }
      }), React.createElement("h3", {
        className: "c-sf-block__header__title"
      }, this.title || ''));
    }
  }, {
    key: "title",
    get: function get() {
      var _this$props3 = this.props,
          title = _this$props3.title,
          blockDefinition = _this$props3.blockDefinition,
          value = _this$props3.value;

      if (title !== undefined && title !== null) {
        return title;
      }

      if (blockDefinition.titleTemplate !== undefined) {
        var hasVariables = false;
        var isEmpty = true;
        var renderedTitle = blockDefinition.titleTemplate.replace(/\${([^}]+)}/g, function (match, varName) {
          if (isStruct(blockDefinition)) {
            var childValue = value[varName];

            if (isNA(childValue)) {
              childValue = '';
            } else if (childValue !== '') {
              isEmpty = false;
            }

            hasVariables = true;
            return childValue || '';
          } else {
            if (varName === blockDefinition.key) {
              return value || '';
            }

            return '';
          }
        });

        if (!hasVariables || !isEmpty) {
          return renderedTitle;
        }
      }

      return null;
    }
  }]);

  return NestedBlockHeader;
}(React.Component), _class2$1.defaultProps = {
  collapsibleBlock: false,
  closed: false
}, _temp$1)) || _class$1);
process.env.NODE_ENV !== "production" ? NestedBlockHeader.propTypes = {
  fieldId: PropTypes.string.isRequired,
  blockId: PropTypes.string.isRequired,
  collapsibleBlock: PropTypes.bool,
  dragHandleRef: refType,
  dragHandleProps: PropTypes.object,
  closed: PropTypes.bool
} : void 0;

var RawHtmlFieldInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RawHtmlFieldInput, _React$Component);

  function RawHtmlFieldInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RawHtmlFieldInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RawHtmlFieldInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onChange = function (event) {
      var input = event.target;
      var value;

      if (input.type === 'file') {
        value = input.files;
      } else if (input.type === 'checkbox' || input.type === 'radio') {
        var boxes = _this.inputs;
        value = boxes.filter(function (box) {
          return box.checked;
        }).map(function (box) {
          return box.value;
        });
      } else if (input.tagName === 'SELECT') {
        value = input.options[input.selectedIndex].value;
      } else {
        value = input.value;
      }

      _this.props.changeBlockValue(value);
    };

    return _this;
  }

  _createClass(RawHtmlFieldInput, [{
    key: "runInnerScripts",
    value: function runInnerScripts() {
      if (shouldRunInnerScripts(this.props.blockDefinition)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = ReactDOM.findDOMNode(this).querySelectorAll('script')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var script = _step.value;
            script.parentNode.removeChild(script);
            window.eval(script.innerHTML);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: "setValue",
    value: function setValue(input) {
      var value = this.props.value;

      if (value !== undefined && value !== null) {
        if (input.type === 'file') {
          input.files = value;
        } else if (input.type === 'checkbox' || input.type === 'radio') {
          input.checked = value === null ? false : typeof value === 'boolean' ? value : value.includes(input.value);
        } else if (input.type === 'hidden') {
          input.value = value;
          input.dispatchEvent(new Event('change'));
        } else {
          input.value = value;
        }
      }
    }
  }, {
    key: "bindChange",
    value: function bindChange(input) {
      if (input.type === 'hidden') {
        var observer = new MutationObserver(function () {
          input.dispatchEvent(new Event('change'));
        });
        observer.observe(input, {
          attributes: true,
          attributeFilter: ['value']
        });
        this.mutationObservers.push(observer);
      }

      input.addEventListener('change', this.onChange);
    }
  }, {
    key: "unbindChange",
    value: function unbindChange(input) {
      input.removeEventListener('change', this.onChange);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          blockDefinition = _this$props.blockDefinition,
          blockId = _this$props.blockId;

      if (!isStatic(blockDefinition)) {
        var name = getFieldName(blockId);
        this.inputs = _toConsumableArray(ReactDOM.findDOMNode(this).querySelectorAll("[name=\"".concat(name, "\"]")));

        if (this.inputs.length === 0) {
          throw Error("Could not find input with name \"".concat(name, "\""));
        }

        this.mutationObservers = [];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.inputs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var input = _step2.value;
            this.setValue(input);
            this.bindChange(input); // We remove the name attribute to remove inputs from the submitted form.

            input.removeAttribute('name');
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }

      this.runInnerScripts();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!isStatic(this.props.blockDefinition)) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this.mutationObservers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var observer = _step3.value;
            observer.disconnect();
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = this.inputs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var input = _step4.value;
            this.unbindChange(input);
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: this.html
        }
      });
    }
  }, {
    key: "html",
    get: function get() {
      var _this$props2 = this.props,
          blockDefinition = _this$props2.blockDefinition,
          html = _this$props2.html,
          blockId = _this$props2.blockId;

      if (isStatic(blockDefinition)) {
        return html;
      }

      return html.replace(/__ID__/g, blockId);
    }
  }]);

  return RawHtmlFieldInput;
}(React.Component);

process.env.NODE_ENV !== "production" ? RawHtmlFieldInput.propTypes = {
  fieldId: PropTypes.string.isRequired,
  blockDefinition: PropTypes.object.isRequired,
  blockId: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  value: PropTypes.any,
  changeBlockValue: PropTypes.func.isRequired
} : void 0;

var _dec$2, _class$2;
var FieldInput = (_dec$2 = connect(function (state, props) {
  var fieldId = props.fieldId,
      blockId = props.blockId;
  var block = state[fieldId].blocks[blockId];
  return {
    blockDefinition: getNestedBlockDefinition(state, fieldId, blockId),
    html: block.html,
    value: block.value
  };
}, function (dispatch, props) {
  var fieldId = props.fieldId,
      blockId = props.blockId;
  return bindActionCreators({
    changeBlockValue: function changeBlockValue$1(value) {
      return changeBlockValue(fieldId, blockId, value);
    }
  }, dispatch);
}), _dec$2(_class$2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FieldInput, _React$Component);

  function FieldInput() {
    _classCallCheck(this, FieldInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(FieldInput).apply(this, arguments));
  }

  _createClass(FieldInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fieldId = _this$props.fieldId,
          blockDefinition = _this$props.blockDefinition,
          blockId = _this$props.blockId,
          value = _this$props.value;

      if (isStruct(blockDefinition)) {
        // Nested StructBlock
        return React.createElement(Block, {
          fieldId: fieldId,
          id: blockId,
          standalone: true,
          sortable: false
        });
      }

      var html = this.props.html;

      if (isNA(html)) {
        html = blockDefinition.html;
      }

      if (isField(blockDefinition)) {
        if (isNA(html)) {
          html = "<input id=\"".concat(blockId, "\" name=\"").concat(getFieldName(blockId), "\"\n                       type=\"text\" />");
        }

        return React.createElement(RawHtmlFieldInput, {
          fieldId: fieldId,
          blockDefinition: blockDefinition,
          blockId: blockId,
          html: html,
          value: value,
          changeBlockValue: this.props.changeBlockValue
        });
      }

      var blocksContainer = React.createElement(BlocksContainer, {
        fieldId: fieldId,
        id: blockId
      });

      if (isNA(html)) {
        return blocksContainer;
      }

      return replaceWithComponent(html, '<noscript data-blocks-container></noscript>', blocksContainer);
    }
  }]);

  return FieldInput;
}(React.Component)) || _class$2);
process.env.NODE_ENV !== "production" ? FieldInput.propTypes = {
  fieldId: PropTypes.string.isRequired,
  blockId: PropTypes.string.isRequired
} : void 0;

var _dec$3, _class$3, _class2$2, _temp$2;
var StructChildField = (_dec$3 = connect(function (state, props) {
  var fieldId = props.fieldId,
      parentBlockId = props.parentBlockId,
      type = props.type;
  var blocks = state[fieldId].blocks;
  var parentBlock = blocks[parentBlockId];
  var blockId = parentBlock.value.find(function (childBlockId) {
    return blocks[childBlockId].type === type;
  });
  return {
    blockDefinition: getNestedBlockDefinition(state, fieldId, blockId),
    blockId: blockId
  };
}), _dec$3(_class$3 = (_temp$2 = _class2$2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StructChildField, _React$Component);

  function StructChildField() {
    _classCallCheck(this, StructChildField);

    return _possibleConstructorReturn(this, _getPrototypeOf(StructChildField).apply(this, arguments));
  }

  _createClass(StructChildField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fieldId = _this$props.fieldId,
          blockId = _this$props.blockId,
          blockDefinition = _this$props.blockDefinition,
          collapsible = _this$props.collapsible;
      var header = React.createElement("label", {
        className: "field__label",
        htmlFor: getFieldName(blockId)
      }, getLabel(blockDefinition));

      if (collapsible) {
        header = React.createElement(NestedBlockHeader, {
          fieldId: fieldId,
          blockId: blockId,
          collapsibleBlock: collapsible,
          blockDefinition: blockDefinition
        });
      }

      return React.createElement("div", {
        className: classNames('field', !!blockDefinition.required && 'required')
      }, header, React.createElement(FieldInput, {
        fieldId: fieldId,
        blockId: blockId,
        header: header,
        collapsible: collapsible
      }));
    }
  }]);

  return StructChildField;
}(React.Component), _class2$2.defaultProps = {
  collapsible: false
}, _temp$2)) || _class$3);
process.env.NODE_ENV !== "production" ? StructChildField.propTypes = {
  fieldId: PropTypes.string.isRequired,
  parentBlockId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  collapsible: PropTypes.bool
} : void 0;

var _dec$4, _class$4;
var StructChildFieldWithTabs = (_dec$4 = connect(function (state, props) {
  var fieldId = props.fieldId,
      blockId = props.blockId;
  var fieldData = state[fieldId];
  var blocks = fieldData.blocks;
  var block = blocks[blockId];
  var blockDefinition = getNestedBlockDefinition(state, fieldId, blockId);
  var hasDescendantError = getDescendantsIds(state, fieldId, blockId, true).some(function (descendantBlockId) {
    return blocks[descendantBlockId].hasError;
  });
  var value = block.value;
  return {
    blockDefinition: blockDefinition,
    html: block.html,
    value: structValueToObject(state, fieldId, value)
  };
}), _dec$4(_class$4 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StructChildFieldWithTabs, _React$Component);

  function StructChildFieldWithTabs() {
    _classCallCheck(this, StructChildFieldWithTabs);

    return _possibleConstructorReturn(this, _getPrototypeOf(StructChildFieldWithTabs).apply(this, arguments));
  }

  _createClass(StructChildFieldWithTabs, [{
    key: "get_title",
    value: function get_title(tabDefinition) {
      var _this$props = this.props,
          blockDefinition = _this$props.blockDefinition,
          value = _this$props.value;

      if (tabDefinition.label !== undefined && tabDefinition.label !== null) {
        return tabDefinition.label;
      }

      if (tabDefinition.titleTemplate !== undefined) {
        var hasVariables = false;
        var isEmpty = true;
        var renderedTitle = tabDefinition.titleTemplate.replace(/\${([^}]+)}/g, function (match, varName) {
          if (isStruct(blockDefinition)) {
            var childValue = value[varName];

            if (isNA(childValue)) {
              childValue = '';
            } else if (childValue !== '') {
              isEmpty = false;
            }

            hasVariables = true;
            return childValue || '';
          } else {
            if (varName === blockDefinition.key) {
              return value || '';
            }

            return '';
          }
        });

        if (!hasVariables || !isEmpty) {
          return renderedTitle;
        }
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          fieldId = _this$props2.fieldId,
          blockDefinition = _this$props2.blockDefinition,
          blockId = _this$props2.blockId;
      var tabList = blockDefinition.tabs.map(function (tabDefinition) {
        return React.createElement(Tab, {
          key: 'tab-list-' + tabDefinition.key
        }, _this.get_title(tabDefinition));
      });
      var tabPanel = blockDefinition.tabs.map(function (tabDefinition) {
        var fieldBlocksDefinition = blockDefinition.children.filter(function (child) {
          return tabDefinition.fields.includes(child.key);
        });
        fieldBlocksDefinition.sort(function (fieldA, fieldB) {
          if (tabDefinition.fields.indexOf(fieldA.key) < tabDefinition.fields.indexOf(fieldB.key)) {
            return -1;
          }

          if (tabDefinition.fields.indexOf(fieldA.key) > tabDefinition.fields.indexOf(fieldB.key)) {
            return 1;
          }

          return 0;
        });
        return React.createElement(TabPanel, {
          key: 'tab-panel-' + tabDefinition.key
        }, fieldBlocksDefinition.map(function (childBlockDefinition) {
          return React.createElement(StructChildField, {
            key: childBlockDefinition.key,
            fieldId: fieldId,
            parentBlockId: blockId,
            type: childBlockDefinition.key,
            collapsible: childBlockDefinition.collapsible
          });
        }));
      });
      return React.createElement("div", {
        className: "c-sf-block__content"
      }, React.createElement(Tabs, null, React.createElement(TabList, null, tabList), tabPanel));
    }
  }]);

  return StructChildFieldWithTabs;
}(React.Component)) || _class$4);
process.env.NODE_ENV !== "production" ? StructChildFieldWithTabs.propTypes = {
  fieldId: PropTypes.string.isRequired,
  blockId: PropTypes.string.isRequired
} : void 0;

var _dec$5, _class$5;
var BlockContent = (_dec$5 = connect(function (state, props) {
  var fieldId = props.fieldId,
      blockId = props.blockId;
  var fieldData = state[fieldId];
  var blocks = fieldData.blocks;
  var block = blocks[blockId];
  var blockDefinition = getNestedBlockDefinition(state, fieldId, blockId);
  var hasDescendantError = getDescendantsIds(state, fieldId, blockId, true).some(function (descendantBlockId) {
    return blocks[descendantBlockId].hasError;
  });
  return {
    blockDefinition: blockDefinition,
    html: block.html,
    collapsible: blockDefinition.collapsible,
    closed: blockDefinition.collapsible && block.closed && !hasDescendantError
  };
}), _dec$5(_class$5 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BlockContent, _React$Component);

  function BlockContent() {
    _classCallCheck(this, BlockContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(BlockContent).apply(this, arguments));
  }

  _createClass(BlockContent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          blockDefinition = _this$props.blockDefinition,
          collapsible = _this$props.collapsible;
      var content = this.html;
      var className = classNames('c-sf-block__content-inner', blockDefinition.className);

      if (collapsible) {
        return React.createElement(AnimateHeight, {
          height: this.height,
          easing: "ease-in-out",
          className: "c-sf-block__content",
          contentClassName: className
        }, content);
      }

      return React.createElement("div", {
        className: "c-sf-block__content"
      }, React.createElement("div", {
        className: className
      }, content));
    }
  }, {
    key: "html",
    get: function get() {
      var _this$props2 = this.props,
          fieldId = _this$props2.fieldId,
          blockDefinition = _this$props2.blockDefinition,
          blockId = _this$props2.blockId;

      if (isStruct(blockDefinition)) {
        var blocksContainer = null;

        if (blockDefinition.tabs !== undefined) {
          blocksContainer = React.createElement(StructChildFieldWithTabs, {
            fieldId: fieldId,
            blockId: blockId
          });
        } else {
          blocksContainer = blockDefinition.children.map(function (childBlockDefinition) {
            return React.createElement(StructChildField, {
              key: childBlockDefinition.key,
              fieldId: fieldId,
              parentBlockId: blockId,
              type: childBlockDefinition.key,
              collapsible: childBlockDefinition.collapsible
            });
          });
        }

        var html = this.props.html;

        if (isNA(html)) {
          html = blockDefinition.html;
        }

        if (isNA(html)) {
          return blocksContainer;
        }

        return replaceWithComponent(html, '<noscript data-blocks-container></noscript>', blocksContainer);
      }

      return React.createElement(FieldInput, {
        fieldId: fieldId,
        blockId: blockId
      });
    }
  }, {
    key: "height",
    get: function get() {
      return this.props.closed ? 0 : 'auto';
    }
  }]);

  return BlockContent;
}(React.Component)) || _class$5);
process.env.NODE_ENV !== "production" ? BlockContent.propTypes = {
  fieldId: PropTypes.string.isRequired,
  blockId: PropTypes.string.isRequired,
  collapsible: PropTypes.bool
} : void 0;

var _dec$6, _class$6, _class2$3, _temp$3;
var BlockActions = (_dec$6 = connect(function (state, props) {
  var fieldId = props.fieldId,
      blockId = props.blockId;
  var blockDefinition = getNestedBlockDefinition(state, fieldId, blockId);
  var siblings = getSiblingsIds(state, fieldId, blockId);
  var field = state[fieldId];
  return {
    blockDefinition: blockDefinition,
    siblings: siblings,
    icons: field.icons,
    labels: field.labels,
    index: siblings.indexOf(blockId)
  };
}, function (dispatch, props) {
  var fieldId = props.fieldId,
      blockId = props.blockId;
  return bindActionCreators({
    hideBlock: function hideBlock$1() {
      return hideBlock(fieldId, blockId);
    },
    duplicateBlock: function duplicateBlock$1() {
      return duplicateBlock(fieldId, blockId);
    }
  }, dispatch);
}), _dec$6(_class$6 = (_temp$3 = _class2$3 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BlockActions, _React$Component);

  function BlockActions() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BlockActions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BlockActions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.sendKeyToDragHandle = function (key) {
      var dragHandle = ReactDOM.findDOMNode(_this.props.dragHandleRef.current);
      triggerKeyboardEvent(dragHandle, 32); // 32 for spacebar, to drag

      return new Promise(function (resolve) {
        setTimeout(function () {
          triggerKeyboardEvent(dragHandle, key);
          setTimeout(function () {
            triggerKeyboardEvent(dragHandle, 32); // Drop at the new position

            resolve();
          }, 100); // 100 ms is the duration of a move in react-beautiful-dnd
        }, 0);
      });
    };

    _this.moveUpHandler = function (event) {
      event.preventDefault();
      event.stopPropagation();

      _this.sendKeyToDragHandle(38) // 38 for up arrow
      .then(function () {
        _this.triggerCustomEvent('move', {
          index: _this.props.index
        });
      });
    };

    _this.moveDownHandler = function (event) {
      event.preventDefault();
      event.stopPropagation();

      _this.sendKeyToDragHandle(40) // 40 for down arrow
      .then(function () {
        _this.triggerCustomEvent('move', {
          index: _this.props.index
        });
      });
    };

    _this.duplicateHandler = function (event) {
      event.preventDefault();
      event.stopPropagation();

      _this.props.duplicateBlock();

      _this.triggerCustomEvent('duplicate');
    };

    _this.deleteHandler = function (event) {
      event.preventDefault();
      event.stopPropagation();

      _this.props.hideBlock();
    };

    return _this;
  }

  _createClass(BlockActions, [{
    key: "triggerCustomEvent",
    value: function triggerCustomEvent$1(name) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      triggerCustomEvent(ReactDOM.findDOMNode(this), name, data);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          blockDefinition = _this$props.blockDefinition,
          sortableBlock = _this$props.sortableBlock,
          canDuplicate = _this$props.canDuplicate,
          icons = _this$props.icons,
          labels = _this$props.labels;
      return React.createElement("div", {
        className: "c-sf-block__actions"
      }, React.createElement("span", {
        className: "c-sf-block__type"
      }, getLabel(blockDefinition)), sortableBlock ? React.createElement(React.Fragment, null, React.createElement("button", {
        className: "c-sf-block__actions__single",
        onClick: this.moveUpHandler,
        title: labels.moveUp,
        disabled: this.isFirst,
        dangerouslySetInnerHTML: {
          __html: icons.moveUp
        }
      }), React.createElement("button", {
        className: "c-sf-block__actions__single",
        onClick: this.moveDownHandler,
        title: labels.moveDown,
        disabled: this.isLast,
        dangerouslySetInnerHTML: {
          __html: icons.moveDown
        }
      })) : null, React.createElement("button", {
        className: "c-sf-block__actions__single",
        onClick: this.duplicateHandler,
        title: labels.duplicate,
        disabled: !canDuplicate,
        dangerouslySetInnerHTML: {
          __html: icons.duplicate
        }
      }), React.createElement("button", {
        className: "c-sf-block__actions__single",
        onClick: this.deleteHandler,
        title: labels.delete,
        dangerouslySetInnerHTML: {
          __html: icons.delete
        }
      }));
    }
  }, {
    key: "isFirst",
    get: function get() {
      return this.props.index === 0;
    }
  }, {
    key: "isLast",
    get: function get() {
      return this.props.index === this.props.siblings.length - 1;
    }
  }]);

  return BlockActions;
}(React.Component), _class2$3.defaultProps = {
  sortableBlock: true,
  canDuplicate: true
}, _temp$3)) || _class$6);
process.env.NODE_ENV !== "production" ? BlockActions.propTypes = {
  fieldId: PropTypes.string.isRequired,
  blockId: PropTypes.string.isRequired,
  sortableBlock: PropTypes.bool,
  canDuplicate: PropTypes.bool,
  dragHandleRef: refType
} : void 0;

var _dec$7, _class$7, _class2$4, _temp$4;
var BlockHeader = (_dec$7 = connect(function (state, props) {
  var fieldId = props.fieldId,
      blockId = props.blockId;
  var fieldData = state[fieldId];
  var blocks = fieldData.blocks;
  var block = blocks[blockId];
  var blockDefinition = getNestedBlockDefinition(state, fieldId, blockId);
  var value = block.value;
  return {
    blockDefinition: blockDefinition,
    icons: fieldData.icons,
    value: isStruct(blockDefinition) ? structValueToObject(state, fieldId, value) : value
  };
}, function (dispatch, props) {
  var fieldId = props.fieldId,
      blockId = props.blockId;
  return bindActionCreators({
    toggleBlock: function toggleBlock$1() {
      return toggleBlock(fieldId, blockId);
    }
  }, dispatch);
}), _dec$7(_class$7 = (_temp$4 = _class2$4 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BlockHeader, _React$Component);

  function BlockHeader() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BlockHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BlockHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.toggle = function () {
      var _this$props = _this.props,
          toggleBlock = _this$props.toggleBlock,
          closed = _this$props.closed;
      toggleBlock();

      _this.triggerCustomEvent('toggle', {
        closed: !closed
      });
    };

    return _this;
  }

  _createClass(BlockHeader, [{
    key: "triggerCustomEvent",
    value: function triggerCustomEvent$1(name) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      triggerCustomEvent(ReactDOM.findDOMNode(this), name, data);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          blockDefinition = _this$props2.blockDefinition,
          fieldId = _this$props2.fieldId,
          blockId = _this$props2.blockId,
          dragHandleProps = _this$props2.dragHandleProps,
          collapsibleBlock = _this$props2.collapsibleBlock,
          sortableBlock = _this$props2.sortableBlock,
          canDuplicate = _this$props2.canDuplicate,
          dragHandleRef = _this$props2.dragHandleRef;
      return React.createElement("div", _extends({
        ref: dragHandleRef,
        onClick: this.toggle
      }, dragHandleProps, {
        className: classNames('c-sf-block__header', collapsibleBlock && 'c-sf-block__header--collapsible', sortableBlock && 'c-sf-block__header--sortable')
      }), React.createElement("span", {
        className: "c-sf-block__header__icon",
        dangerouslySetInnerHTML: {
          __html: blockDefinition.icon
        }
      }), React.createElement("h3", {
        className: "c-sf-block__header__title"
      }, this.title || ''), React.createElement(BlockActions, {
        fieldId: fieldId,
        blockId: blockId,
        sortableBlock: sortableBlock,
        canDuplicate: canDuplicate,
        dragHandleRef: dragHandleRef
      }));
    }
  }, {
    key: "title",
    get: function get() {
      var _this$props3 = this.props,
          title = _this$props3.title,
          blockDefinition = _this$props3.blockDefinition,
          value = _this$props3.value;

      if (title !== undefined && title !== null) {
        return title;
      }

      if (blockDefinition.titleTemplate !== undefined) {
        var hasVariables = false;
        var isEmpty = true;
        var renderedTitle = blockDefinition.titleTemplate.replace(/\${([^}]+)}/g, function (match, varName) {
          if (isStruct(blockDefinition)) {
            var childValue = value[varName];

            if (isNA(childValue)) {
              childValue = '';
            } else if (childValue !== '') {
              isEmpty = false;
            }

            hasVariables = true;
            return childValue || '';
          } else {
            if (varName === blockDefinition.key) {
              return value || '';
            }

            return '';
          }
        });

        if (!hasVariables || !isEmpty) {
          return renderedTitle;
        }
      }

      return null;
    }
  }]);

  return BlockHeader;
}(React.Component), _class2$4.defaultProps = {
  collapsibleBlock: true,
  sortableBlock: true,
  canDuplicate: true
}, _temp$4)) || _class$7);
process.env.NODE_ENV !== "production" ? BlockHeader.propTypes = {
  fieldId: PropTypes.string.isRequired,
  blockId: PropTypes.string.isRequired,
  collapsibleBlock: PropTypes.bool,
  sortableBlock: PropTypes.bool,
  canDuplicate: PropTypes.bool,
  dragHandleRef: refType,
  dragHandleProps: PropTypes.object
} : void 0;

var _dec$8, _class$8, _class2$5, _temp$5;
var Block = (_dec$8 = connect(function (state, props) {
  var fieldId = props.fieldId,
      id = props.id;
  var fieldData = state[fieldId];
  var blocks = fieldData.blocks;
  var block = blocks[id];
  var siblings = getSiblingsIds(state, fieldId, id);
  var blockDefinition = getNestedBlockDefinition(state, fieldId, id);
  var hasDescendantError = getDescendantsIds(state, fieldId, id, true).some(function (descendantBlockId) {
    return blocks[descendantBlockId].hasError;
  });
  return {
    blockDefinition: blockDefinition,
    parentId: block.parent,
    hasError: hasDescendantError,
    closed: block.closed,
    hidden: block.hidden,
    shouldUpdate: block.shouldUpdate,
    index: siblings.indexOf(id)
  };
}, function (dispatch, props) {
  var fieldId = props.fieldId,
      id = props.id;
  return bindActionCreators({
    blockUpdated: function blockUpdated$1() {
      return blockUpdated(fieldId, id);
    },
    showBlock: function showBlock$1() {
      return showBlock(fieldId, id);
    },
    deleteBlock: function deleteBlock$1() {
      return deleteBlock(fieldId, id);
    }
  }, dispatch);
}), _dec$8(_class$8 = (_temp$5 = _class2$5 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Block, _React$Component);

  function Block(props) {
    var _this;

    _classCallCheck(this, Block);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Block).call(this, props));

    _this.onDraggableContainerAnimationEnd = function () {
      if (_this.props.hidden) {
        _this.triggerCustomEvent('delete');

        _this.props.deleteBlock();
      }
    };

    _this.dragHandleRef = React.createRef();
    _this.contentRef = React.createRef();
    return _this;
  }

  _createClass(Block, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return nextProps.shouldUpdate;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (!prevProps.shouldUpdate) {
        this.props.blockUpdated();
      }
    }
  }, {
    key: "triggerCustomEvent",
    value: function triggerCustomEvent$1(name) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      triggerCustomEvent(ReactDOM.findDOMNode(this), name, data);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.hidden) {
        this.props.showBlock();
      }
    }
  }, {
    key: "wrapSortable",
    value: function wrapSortable(blockContent) {
      var _this2 = this;

      var _this$props = this.props,
          fieldId = _this$props.fieldId,
          id = _this$props.id,
          parentId = _this$props.parentId,
          index = _this$props.index,
          hasError = _this$props.hasError,
          collapsible = _this$props.collapsible,
          sortable = _this$props.sortable,
          canAdd = _this$props.canAdd;
      var blockClassName = "c-sf-block ".concat(hasError ? 'c-sf-block--error' : '');
      var addButton = React.createElement(AddButton, {
        fieldId: fieldId,
        parentId: parentId,
        blockId: id,
        visible: canAdd
      });

      if (sortable) {
        return React.createElement(Draggable, {
          draggableId: id,
          index: index,
          type: "".concat(fieldId, "-").concat(parentId)
        }, function (provided, snapshot) {
          return React.createElement("div", _extends({
            className: "c-sf-container__block-container",
            ref: provided.innerRef
          }, provided.draggableProps), React.createElement("div", {
            className: blockClassName
          }, React.createElement(BlockHeader, {
            fieldId: fieldId,
            blockId: id,
            collapsibleBlock: collapsible,
            sortableBlock: sortable,
            canDuplicate: canAdd,
            dragHandleRef: _this2.dragHandleRef,
            dragHandleProps: provided.dragHandleProps
          }), blockContent), addButton);
        });
      }

      return React.createElement("div", {
        className: "c-sf-container__block-container"
      }, React.createElement("div", {
        className: blockClassName
      }, React.createElement(BlockHeader, {
        fieldId: fieldId,
        blockId: id,
        collapsibleBlock: collapsible,
        sortableBlock: sortable,
        canDuplicate: canAdd,
        dragHandleRef: this.dragHandleRef
      }), blockContent), addButton);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          fieldId = _this$props2.fieldId,
          id = _this$props2.id,
          standalone = _this$props2.standalone,
          collapsible = _this$props2.collapsible;
      var blockContent = React.createElement(BlockContent, {
        ref: this.contentRef,
        fieldId: fieldId,
        blockId: id,
        collapsible: collapsible
      });

      if (standalone) {
        return React.createElement("div", {
          className: "c-sf-container__block-container"
        }, React.createElement("div", {
          className: "c-sf-block"
        }, blockContent));
      }

      return React.createElement(AnimateHeight, {
        height: this.draggableHeight,
        onAnimationEnd: this.onDraggableContainerAnimationEnd
      }, this.wrapSortable(blockContent));
    }
  }, {
    key: "draggableHeight",
    get: function get() {
      return this.props.hidden ? 0 : 'auto';
    }
  }]);

  return Block;
}(React.Component), _class2$5.defaultProps = {
  standalone: false,
  sortable: true,
  canAdd: true
}, _temp$5)) || _class$8);
process.env.NODE_ENV !== "production" ? Block.propTypes = {
  fieldId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  standalone: PropTypes.bool,
  collapsible: PropTypes.bool,
  sortable: PropTypes.bool,
  canAdd: PropTypes.bool
} : void 0;

var _dec$9, _class$9;
var BlocksContainer = (_dec$9 = connect(function (state, props) {
  var fieldId = props.fieldId,
      id = props.id;
  var fieldData = state[fieldId];
  var blocksIds = id === null ? fieldData.rootBlocks : fieldData.blocks[id].value;
  var minNum, maxNum;

  if (id === null) {
    minNum = fieldData.minNum;
    maxNum = fieldData.maxNum;
  } else {
    var blockDefinition = getNestedBlockDefinition(state, fieldId, id);
    minNum = blockDefinition.minNum;
    maxNum = blockDefinition.maxNum;
  }

  if (isNA(minNum)) {
    minNum = 0;
  }

  if (isNA(maxNum)) {
    maxNum = Infinity;
  }

  return {
    minNum: minNum,
    maxNum: maxNum,
    gutteredAdd: fieldData.gutteredAdd,
    blocksIds: blocksIds
  };
}), _dec$9(_class$9 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BlocksContainer, _React$Component);

  function BlocksContainer() {
    _classCallCheck(this, BlocksContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(BlocksContainer).apply(this, arguments));
  }

  _createClass(BlocksContainer, [{
    key: "renderBlock",
    value: function renderBlock(blockId) {
      var canAdd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return React.createElement(Block, {
        key: blockId,
        fieldId: this.props.fieldId,
        id: blockId,
        canAdd: canAdd
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          fieldId = _this$props.fieldId,
          id = _this$props.id,
          blocksIds = _this$props.blocksIds,
          maxNum = _this$props.maxNum,
          gutteredAdd = _this$props.gutteredAdd;
      var droppableId = "".concat(fieldId, "-").concat(id);
      var num = blocksIds.length;
      var canAdd = num < maxNum;
      return React.createElement(Droppable, {
        droppableId: droppableId,
        type: droppableId
      }, function (provided, snapshot) {
        return React.createElement("div", {
          ref: provided.innerRef,
          className: classNames('c-sf-container', snapshot.isDraggingOver && 'c-sf-container--dragging', gutteredAdd && 'c-sf-container--add-in-gutter')
        }, React.createElement(AddButton, {
          fieldId: fieldId,
          parentId: id,
          open: blocksIds.length === 0,
          visible: canAdd
        }), blocksIds.map(function (blockId) {
          return _this.renderBlock(blockId, canAdd);
        }), provided.placeholder);
      });
    }
  }]);

  return BlocksContainer;
}(React.Component)) || _class$9);
process.env.NODE_ENV !== "production" ? BlocksContainer.propTypes = {
  fieldId: PropTypes.string.isRequired,
  id: PropTypes.string
} : void 0;

var _dec$a, _class$a, _class2$6, _temp$6;

function lazyFunction(f) {
  return function () {
    return f().apply(this, arguments);
  };
}

var BlockDefinitionType = PropTypes.shape({
  key: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  default: PropTypes.any,
  icon: PropTypes.string,
  group: PropTypes.string,
  className: PropTypes.string,
  minNum: PropTypes.number,
  maxNum: PropTypes.number,
  closed: PropTypes.bool,
  titleTemplate: PropTypes.string,
  html: PropTypes.string,
  isStruct: PropTypes.bool,
  isStatic: PropTypes.bool,
  dangerouslyRunInnerScripts: PropTypes.bool,
  children: PropTypes.arrayOf(lazyFunction(function () {
    return BlockDefinitionType;
  }))
});
var BlockValueType = PropTypes.shape({
  type: PropTypes.string.isRequired,
  html: PropTypes.string,
  hasError: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.arrayOf(lazyFunction(function () {
    return BlockValueType;
  })), PropTypes.string, PropTypes.number, PropTypes.bool])
});
var StreamFieldDefaultProps = {
  required: false,
  minNum: 0,
  maxNum: Infinity,
  icons: {
    add: '<i aria-hidden="true">+</i>',
    moveUp: '<i class="fas fa-chevron-up" aria-hidden="true" />',
    moveDown: '<i class="fas fa-chevron-down" aria-hidden="true" />',
    duplicate: '<i class="fas fa-clone" aria-hidden="true" />',
    delete: '<i class="fas fa-trash" aria-hidden="true" />',
    grip: '<i class="fas fa-grip-vertical fa-fw" aria-hidden="true" />'
  },
  labels: {
    add: 'Add block',
    moveUp: 'Move up',
    moveDown: 'Move down',
    duplicate: 'Duplicate',
    delete: 'Delete'
  }
};
var StreamField = (_dec$a = connect(function (state, props) {
  var id = props.id;
  var fieldData = state[id];
  return {
    generatedValue: fieldData === undefined ? '' : stateToValue(state, id)
  };
}, function (dispatch, props) {
  var id = props.id;
  return bindActionCreators({
    initializeStreamField: function initializeStreamField$1(data) {
      return initializeStreamField(id, data);
    },
    moveBlock: function moveBlock$1(blockId, newIndex) {
      return moveBlock(id, blockId, newIndex);
    }
  }, dispatch);
}), _dec$a(_class$a = (_temp$6 = _class2$6 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StreamField, _React$Component);

  function StreamField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StreamField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StreamField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onDragEnd = function (result) {
      var draggableId = result.draggableId,
          source = result.source,
          destination = result.destination;

      if (!destination || result.reason === 'CANCEL' || destination.droppableId !== source.droppableId || destination.index === source.index) {
        return;
      }

      _this.props.moveBlock(draggableId, destination.index);
    };

    return _this;
  }

  _createClass(StreamField, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // Removes the input with the same name if it exists.
      var input = document.querySelector("[name=\"".concat(this.props.id, "\"]"));

      if (input !== null) {
        input.parentNode.removeChild(input);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          initializeStreamField = _this$props.initializeStreamField,
          required = _this$props.required,
          minNum = _this$props.minNum,
          maxNum = _this$props.maxNum,
          gutteredAdd = _this$props.gutteredAdd,
          blockDefinitions = _this$props.blockDefinitions,
          value = _this$props.value;
      var defaultProps = StreamFieldDefaultProps;

      var icons = _objectSpread({}, defaultProps.icons, this.props.icons);

      var labels = _objectSpread({}, defaultProps.labels, this.props.labels);

      initializeStreamField({
        required: required,
        minNum: minNum,
        maxNum: maxNum,
        icons: icons,
        labels: labels,
        gutteredAdd: gutteredAdd,
        blockDefinitions: blockDefinitions,
        value: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          generatedValue = _this$props2.generatedValue;
      return React.createElement(DragDropContext, {
        onDragEnd: this.onDragEnd
      }, generatedValue ? React.createElement(BlocksContainer, {
        fieldId: id,
        id: null
      }) : null, React.createElement("input", {
        type: "hidden",
        name: id,
        value: JSON.stringify(generatedValue)
      }));
    }
  }]);

  return StreamField;
}(React.Component), _class2$6.defaultProps = StreamFieldDefaultProps, _temp$6)) || _class$a);
process.env.NODE_ENV !== "production" ? StreamField.propTypes = {
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
  minNum: PropTypes.number,
  maxNum: PropTypes.number,
  icons: PropTypes.shape({
    add: PropTypes.string,
    moveUp: PropTypes.string,
    moveDown: PropTypes.string,
    duplicate: PropTypes.string,
    delete: PropTypes.string,
    grip: PropTypes.string
  }),
  labels: PropTypes.shape({
    add: PropTypes.string,
    moveUp: PropTypes.string,
    moveDown: PropTypes.string,
    duplicate: PropTypes.string,
    delete: PropTypes.string
  }),
  gutteredAdd: PropTypes.bool,
  blockDefinitions: PropTypes.arrayOf(BlockDefinitionType).isRequired,
  value: PropTypes.arrayOf(BlockValueType).isRequired
} : void 0;

var updateChildren = function updateChildren(state, fieldId, parentId) {
  var childrenIds = getChildrenIds(state, fieldId, parentId);
  return applyToBlocks(state, fieldId, childrenIds, function (block) {
    return _objectSpread({}, block, {
      shouldUpdate: true
    });
  });
};
var setChildren = function setChildren(state, fieldId, parentId, childrenIds) {
  var fieldData = state[fieldId];
  var blocks = fieldData.blocks;

  if (parentId === null) {
    fieldData = _objectSpread({}, fieldData, {
      rootBlocks: childrenIds
    });
  } else {
    blocks = _objectSpread({}, blocks, _defineProperty({}, parentId, _objectSpread({}, blocks[parentId], {
      value: childrenIds
    })));
  }

  return _objectSpread({}, state, _defineProperty({}, fieldId, _objectSpread({}, fieldData, {
    blocks: blocks
  })));
};
var insertBlock = function insertBlock(state, fieldId, parentId, index, blockId, block) {
  var siblingsIds = _toConsumableArray(getChildrenIds(state, fieldId, parentId));

  siblingsIds.splice(index, 0, blockId);
  state = setChildren(state, fieldId, parentId, siblingsIds);
  var fieldData = state[fieldId];
  var blocks = fieldData.blocks;
  state = _objectSpread({}, state, _defineProperty({}, fieldId, _objectSpread({}, fieldData, {
    blocks: _objectSpread({}, blocks, _defineProperty({}, blockId, block))
  })));
  return updateChildren(state, fieldId, parentId);
};
var moveBlock$1 = function moveBlock(state, fieldId, blockId, newIndex) {
  if (newIndex < 0) {
    throw new Error("Index ".concat(newIndex, " is out of bounds."));
  }

  var fieldData = state[fieldId];
  var blocks = fieldData.blocks;
  var block = blocks[blockId];

  var siblingsIds = _toConsumableArray(getChildrenIds(state, fieldId, block.parent));

  if (newIndex >= siblingsIds.length) {
    throw new Error("Index ".concat(newIndex, " is out of bounds."));
  }

  var oldIndex = siblingsIds.indexOf(blockId);
  siblingsIds.splice(oldIndex, 1);
  siblingsIds.splice(newIndex, 0, blockId);
  state = setChildren(state, fieldId, block.parent, siblingsIds);
  return updateChildren(state, fieldId, block.parent);
};
var addBlock$1 = function addBlock(state, fieldId, parentId, index, type) {
  var fieldData = state[fieldId];
  var blockDefinitions;

  if (parentId === null) {
    blockDefinitions = fieldData.blockDefinitions;
  } else {
    var parentBlockDefinition = getNestedBlockDefinition(state, fieldId, parentId);
    blockDefinitions = parentBlockDefinition.children;
  }

  var blockDefinition = getBlockDefinition(blockDefinitions, type);

  var _getNewBlock = getNewBlock(parentId, blockDefinition),
      _getNewBlock2 = _slicedToArray(_getNewBlock, 3),
      blockId = _getNewBlock2[0],
      block = _getNewBlock2[1],
      extraBlocks = _getNewBlock2[2];

  state = _objectSpread({}, state, _defineProperty({}, fieldId, _objectSpread({}, fieldData, {
    blocks: _objectSpread({}, fieldData.blocks, extraBlocks)
  })));
  return insertBlock(state, fieldId, parentId, index, blockId, block);
};
var getIndex = function getIndex(state, fieldId, blockId) {
  var block = state[fieldId].blocks[blockId];

  var siblingsIds = _toConsumableArray(getChildrenIds(state, fieldId, block.parent));

  return siblingsIds.indexOf(blockId);
};
var cloneBlock = function cloneBlock(state, fieldId, parentId, blockId) {
  var fieldData = state[fieldId];

  var blocks = _objectSpread({}, fieldData.blocks);

  var newBlockId = getNewId();

  var newBlock = _objectSpread({}, blocks[blockId], {
    parent: parentId
  });

  var newBlocks = _defineProperty({}, newBlockId, newBlock);

  var blockDefinition = getNestedBlockDefinition(state, fieldId, blockId);
  var value = newBlock.value;

  if (isStruct(blockDefinition)) {
    var newValue = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var childBlockId = _step.value;

        var _cloneBlock = cloneBlock(state, fieldId, newBlockId, childBlockId),
            _cloneBlock2 = _slicedToArray(_cloneBlock, 2),
            newChildId = _cloneBlock2[0],
            newChildrenBlocks = _cloneBlock2[1];

        newBlocks = _objectSpread({}, newBlocks, newChildrenBlocks);
        newValue.push(newChildId);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    value = newValue;
  } else if (!isField(blockDefinition)) {
    var _newValue = [];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _childBlockId = _step2.value;

        var _cloneBlock3 = cloneBlock(state, fieldId, newBlockId, _childBlockId),
            _cloneBlock4 = _slicedToArray(_cloneBlock3, 2),
            newChildBlockId = _cloneBlock4[0],
            newChildrenBlocks = _cloneBlock4[1];

        _newValue.push(newChildBlockId);

        newBlocks = _objectSpread({}, newBlocks, newChildrenBlocks);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    value = _newValue;
  }

  newBlock.value = value;
  return [newBlockId, newBlocks];
};
var duplicateBlock$1 = function duplicateBlock(state, fieldId, blockId) {
  var fieldData = state[fieldId];
  var blocks = fieldData.blocks;
  var parentId = blocks[blockId].parent;

  var _cloneBlock5 = cloneBlock(state, fieldId, parentId, blockId),
      _cloneBlock6 = _slicedToArray(_cloneBlock5, 2),
      newBlockId = _cloneBlock6[0],
      newBlocks = _cloneBlock6[1];

  state = _objectSpread({}, state, _defineProperty({}, fieldId, _objectSpread({}, fieldData, {
    blocks: _objectSpread({}, blocks, newBlocks)
  })));
  var block = newBlocks[newBlockId];
  block.hidden = true;
  var index = getIndex(state, fieldId, blockId) + 1; // + 1 to add after.

  return insertBlock(state, fieldId, parentId, index, newBlockId, block);
};
var deleteBlock$1 = function deleteBlock(state, fieldId, blockId) {
  var fieldData = state[fieldId];

  var rootBlocks = _toConsumableArray(fieldData.rootBlocks);

  var blocks = _objectSpread({}, fieldData.blocks);

  var block = blocks[blockId];
  var shouldUpdateSiblings = true;

  if (block.parent === null) {
    rootBlocks = rootBlocks.filter(function (childBlockId) {
      return childBlockId !== blockId;
    });
  } else {
    var parentBlockDefinition = getNestedBlockDefinition(state, fieldId, block.parent);
    var parentBlock = blocks[block.parent];

    if (isStruct(parentBlockDefinition)) {
      shouldUpdateSiblings = false;
    }

    blocks[block.parent] = _objectSpread({}, parentBlock, {
      closed: false,
      // We make sure it’s open for when we remove
      shouldUpdate: true,
      // an errored block from a list block, and we
      // force update the header color.
      value: parentBlock.value.filter(function (childBlockId) {
        return childBlockId !== blockId;
      })
    });
  }

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = getDescendantsIds(state, fieldId, blockId, true)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var descendantBlockId = _step3.value;
      delete blocks[descendantBlockId];
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  state = _objectSpread({}, state, _defineProperty({}, fieldId, _objectSpread({}, fieldData, {
    rootBlocks: rootBlocks,
    blocks: blocks
  })));

  if (shouldUpdateSiblings) {
    return updateChildren(state, fieldId, block.parent);
  }

  return state;
};

var initialState = {};
var reducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'INITIALIZE_STREAM_FIELD':
      {
        var data = deepCopy(action.data);
        var required = data.required,
            minNum = data.minNum,
            maxNum = data.maxNum,
            icons = data.icons,
            labels = data.labels,
            gutteredAdd = data.gutteredAdd,
            blockDefinitions = data.blockDefinitions,
            isMobile = data.isMobile,
            value = data.value;
        state = _objectSpread({}, state, _defineProperty({}, action.id, {
          required: required,
          minNum: minNum,
          maxNum: maxNum,
          icons: icons,
          labels: labels,
          gutteredAdd: gutteredAdd,
          blockDefinitions: blockDefinitions,
          isMobile: isMobile
        }));
        return valueToState(state, action.id, value);
      }

    case 'SET_IS_MOBILE':
      {
        return _objectSpread({}, state, _defineProperty({}, action.id, _objectSpread({}, state[action.id], {
          isMobile: action.isMobile
        })));
      }

    case 'BLOCK_UPDATED':
      {
        var fieldId = action.fieldId,
            blockId = action.blockId;
        return applyToBlock(state, fieldId, blockId, function (block) {
          return _objectSpread({}, block, {
            shouldUpdate: false
          });
        });
      }

    case 'CHANGE_BLOCK_VALUES':
      {
        var _fieldId = action.fieldId,
            _blockId = action.blockId,
            _value = action.value;
        state = applyToBlock(state, _fieldId, _blockId, function (block) {
          return _objectSpread({}, block, {
            value: _value,
            shouldUpdate: true
          });
        });
        var blocks = state[_fieldId].blocks;
        var block = blocks[_blockId];
        var parentBlockId = block.parent;

        if (parentBlockId !== null) {
          var parentBlockDefinition = getNestedBlockDefinition(state, _fieldId, parentBlockId);

          if (isStruct(parentBlockDefinition)) {
            state = applyToBlock(state, _fieldId, parentBlockId, function (block) {
              return _objectSpread({}, block, {
                shouldUpdate: true
              });
            });
          }
        }

        return state;
      }

    case 'TOGGLE_BLOCK':
      {
        var _fieldId2 = action.fieldId,
            _blockId2 = action.blockId;
        return applyToBlock(state, _fieldId2, _blockId2, function (block) {
          return _objectSpread({}, block, {
            closed: block.closed === undefined ? false : !block.closed,
            shouldUpdate: true
          });
        });
      }

    case 'SHOW_BLOCK':
      {
        var _fieldId3 = action.fieldId,
            _blockId3 = action.blockId;
        return applyToBlock(state, _fieldId3, _blockId3, function (block) {
          return _objectSpread({}, block, {
            hidden: false,
            shouldUpdate: true
          });
        });
      }

    case 'HIDE_BLOCK':
      {
        var _fieldId4 = action.fieldId,
            _blockId4 = action.blockId;
        return applyToBlock(state, _fieldId4, _blockId4, function (block) {
          return _objectSpread({}, block, {
            hidden: true,
            shouldUpdate: true
          });
        });
      }

    case 'ADD_BLOCK':
      {
        var _fieldId5 = action.fieldId,
            parentId = action.parentId,
            index = action.index,
            blockType = action.blockType;
        return addBlock$1(state, _fieldId5, parentId, index, blockType);
      }

    case 'DUPLICATE_BLOCK':
      {
        var _fieldId6 = action.fieldId,
            _blockId5 = action.blockId;
        return duplicateBlock$1(state, _fieldId6, _blockId5);
      }

    case 'MOVE_BLOCK':
      {
        var _fieldId7 = action.fieldId,
            _blockId6 = action.blockId,
            newIndex = action.newIndex;
        return moveBlock$1(state, _fieldId7, _blockId6, newIndex);
      }

    case 'DELETE_BLOCK':
      {
        return deleteBlock$1(state, action.fieldId, action.blockId);
      }

    default:
      {
        return state;
      }
  }
});

export { StreamField, reducer as streamFieldReducer };
