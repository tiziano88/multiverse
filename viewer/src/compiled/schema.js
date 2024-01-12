/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.multiverse = (function() {

    /**
     * Namespace multiverse.
     * @exports multiverse
     * @namespace
     */
    var multiverse = {};

    multiverse.PublishedItem = (function() {

        /**
         * Properties of a PublishedItem.
         * @memberof multiverse
         * @interface IPublishedItem
         * @property {string|null} [uuid] PublishedItem uuid
         * @property {multiverse.IArticle|null} [article] PublishedItem article
         * @property {multiverse.IYouTubeVideo|null} [youtubeVideo] PublishedItem youtubeVideo
         * @property {multiverse.IRating|null} [rating] PublishedItem rating
         */

        /**
         * Constructs a new PublishedItem.
         * @memberof multiverse
         * @classdesc Represents a PublishedItem.
         * @implements IPublishedItem
         * @constructor
         * @param {multiverse.IPublishedItem=} [properties] Properties to set
         */
        function PublishedItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PublishedItem uuid.
         * @member {string} uuid
         * @memberof multiverse.PublishedItem
         * @instance
         */
        PublishedItem.prototype.uuid = "";

        /**
         * PublishedItem article.
         * @member {multiverse.IArticle|null|undefined} article
         * @memberof multiverse.PublishedItem
         * @instance
         */
        PublishedItem.prototype.article = null;

        /**
         * PublishedItem youtubeVideo.
         * @member {multiverse.IYouTubeVideo|null|undefined} youtubeVideo
         * @memberof multiverse.PublishedItem
         * @instance
         */
        PublishedItem.prototype.youtubeVideo = null;

        /**
         * PublishedItem rating.
         * @member {multiverse.IRating|null|undefined} rating
         * @memberof multiverse.PublishedItem
         * @instance
         */
        PublishedItem.prototype.rating = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * PublishedItem item.
         * @member {"article"|"youtubeVideo"|"rating"|undefined} item
         * @memberof multiverse.PublishedItem
         * @instance
         */
        Object.defineProperty(PublishedItem.prototype, "item", {
            get: $util.oneOfGetter($oneOfFields = ["article", "youtubeVideo", "rating"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PublishedItem instance using the specified properties.
         * @function create
         * @memberof multiverse.PublishedItem
         * @static
         * @param {multiverse.IPublishedItem=} [properties] Properties to set
         * @returns {multiverse.PublishedItem} PublishedItem instance
         */
        PublishedItem.create = function create(properties) {
            return new PublishedItem(properties);
        };

        /**
         * Encodes the specified PublishedItem message. Does not implicitly {@link multiverse.PublishedItem.verify|verify} messages.
         * @function encode
         * @memberof multiverse.PublishedItem
         * @static
         * @param {multiverse.IPublishedItem} message PublishedItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublishedItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.youtubeVideo != null && Object.hasOwnProperty.call(message, "youtubeVideo"))
                $root.multiverse.YouTubeVideo.encode(message.youtubeVideo, writer.uint32(/* id 129382, wireType 2 =*/1035058).fork()).ldelim();
            if (message.rating != null && Object.hasOwnProperty.call(message, "rating"))
                $root.multiverse.Rating.encode(message.rating, writer.uint32(/* id 525242, wireType 2 =*/4201938).fork()).ldelim();
            if (message.article != null && Object.hasOwnProperty.call(message, "article"))
                $root.multiverse.Article.encode(message.article, writer.uint32(/* id 1728797, wireType 2 =*/13830378).fork()).ldelim();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 21283000, wireType 2 =*/170264002).string(message.uuid);
            return writer;
        };

        /**
         * Encodes the specified PublishedItem message, length delimited. Does not implicitly {@link multiverse.PublishedItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multiverse.PublishedItem
         * @static
         * @param {multiverse.IPublishedItem} message PublishedItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublishedItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PublishedItem message from the specified reader or buffer.
         * @function decode
         * @memberof multiverse.PublishedItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multiverse.PublishedItem} PublishedItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublishedItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multiverse.PublishedItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 21283000: {
                        message.uuid = reader.string();
                        break;
                    }
                case 1728797: {
                        message.article = $root.multiverse.Article.decode(reader, reader.uint32());
                        break;
                    }
                case 129382: {
                        message.youtubeVideo = $root.multiverse.YouTubeVideo.decode(reader, reader.uint32());
                        break;
                    }
                case 525242: {
                        message.rating = $root.multiverse.Rating.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PublishedItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multiverse.PublishedItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multiverse.PublishedItem} PublishedItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublishedItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PublishedItem message.
         * @function verify
         * @memberof multiverse.PublishedItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PublishedItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.article != null && message.hasOwnProperty("article")) {
                properties.item = 1;
                {
                    var error = $root.multiverse.Article.verify(message.article);
                    if (error)
                        return "article." + error;
                }
            }
            if (message.youtubeVideo != null && message.hasOwnProperty("youtubeVideo")) {
                if (properties.item === 1)
                    return "item: multiple values";
                properties.item = 1;
                {
                    var error = $root.multiverse.YouTubeVideo.verify(message.youtubeVideo);
                    if (error)
                        return "youtubeVideo." + error;
                }
            }
            if (message.rating != null && message.hasOwnProperty("rating")) {
                if (properties.item === 1)
                    return "item: multiple values";
                properties.item = 1;
                {
                    var error = $root.multiverse.Rating.verify(message.rating);
                    if (error)
                        return "rating." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PublishedItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multiverse.PublishedItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multiverse.PublishedItem} PublishedItem
         */
        PublishedItem.fromObject = function fromObject(object) {
            if (object instanceof $root.multiverse.PublishedItem)
                return object;
            var message = new $root.multiverse.PublishedItem();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.article != null) {
                if (typeof object.article !== "object")
                    throw TypeError(".multiverse.PublishedItem.article: object expected");
                message.article = $root.multiverse.Article.fromObject(object.article);
            }
            if (object.youtubeVideo != null) {
                if (typeof object.youtubeVideo !== "object")
                    throw TypeError(".multiverse.PublishedItem.youtubeVideo: object expected");
                message.youtubeVideo = $root.multiverse.YouTubeVideo.fromObject(object.youtubeVideo);
            }
            if (object.rating != null) {
                if (typeof object.rating !== "object")
                    throw TypeError(".multiverse.PublishedItem.rating: object expected");
                message.rating = $root.multiverse.Rating.fromObject(object.rating);
            }
            return message;
        };

        /**
         * Creates a plain object from a PublishedItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multiverse.PublishedItem
         * @static
         * @param {multiverse.PublishedItem} message PublishedItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PublishedItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.uuid = "";
            if (message.youtubeVideo != null && message.hasOwnProperty("youtubeVideo")) {
                object.youtubeVideo = $root.multiverse.YouTubeVideo.toObject(message.youtubeVideo, options);
                if (options.oneofs)
                    object.item = "youtubeVideo";
            }
            if (message.rating != null && message.hasOwnProperty("rating")) {
                object.rating = $root.multiverse.Rating.toObject(message.rating, options);
                if (options.oneofs)
                    object.item = "rating";
            }
            if (message.article != null && message.hasOwnProperty("article")) {
                object.article = $root.multiverse.Article.toObject(message.article, options);
                if (options.oneofs)
                    object.item = "article";
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            return object;
        };

        /**
         * Converts this PublishedItem to JSON.
         * @function toJSON
         * @memberof multiverse.PublishedItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PublishedItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PublishedItem
         * @function getTypeUrl
         * @memberof multiverse.PublishedItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PublishedItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/multiverse.PublishedItem";
        };

        return PublishedItem;
    })();

    multiverse.UniverseDetails = (function() {

        /**
         * Properties of an UniverseDetails.
         * @memberof multiverse
         * @interface IUniverseDetails
         * @property {string|null} [name] UniverseDetails name
         * @property {multiverse.IContent|null} [description] UniverseDetails description
         * @property {multiverse.IImage|null} [thumbnail] UniverseDetails thumbnail
         */

        /**
         * Constructs a new UniverseDetails.
         * @memberof multiverse
         * @classdesc Represents an UniverseDetails.
         * @implements IUniverseDetails
         * @constructor
         * @param {multiverse.IUniverseDetails=} [properties] Properties to set
         */
        function UniverseDetails(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UniverseDetails name.
         * @member {string} name
         * @memberof multiverse.UniverseDetails
         * @instance
         */
        UniverseDetails.prototype.name = "";

        /**
         * UniverseDetails description.
         * @member {multiverse.IContent|null|undefined} description
         * @memberof multiverse.UniverseDetails
         * @instance
         */
        UniverseDetails.prototype.description = null;

        /**
         * UniverseDetails thumbnail.
         * @member {multiverse.IImage|null|undefined} thumbnail
         * @memberof multiverse.UniverseDetails
         * @instance
         */
        UniverseDetails.prototype.thumbnail = null;

        /**
         * Creates a new UniverseDetails instance using the specified properties.
         * @function create
         * @memberof multiverse.UniverseDetails
         * @static
         * @param {multiverse.IUniverseDetails=} [properties] Properties to set
         * @returns {multiverse.UniverseDetails} UniverseDetails instance
         */
        UniverseDetails.create = function create(properties) {
            return new UniverseDetails(properties);
        };

        /**
         * Encodes the specified UniverseDetails message. Does not implicitly {@link multiverse.UniverseDetails.verify|verify} messages.
         * @function encode
         * @memberof multiverse.UniverseDetails
         * @static
         * @param {multiverse.IUniverseDetails} message UniverseDetails message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UniverseDetails.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.thumbnail != null && Object.hasOwnProperty.call(message, "thumbnail"))
                $root.multiverse.Image.encode(message.thumbnail, writer.uint32(/* id 112362, wireType 2 =*/898898).fork()).ldelim();
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                $root.multiverse.Content.encode(message.description, writer.uint32(/* id 761222, wireType 2 =*/6089778).fork()).ldelim();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 7872837, wireType 2 =*/62982698).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified UniverseDetails message, length delimited. Does not implicitly {@link multiverse.UniverseDetails.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multiverse.UniverseDetails
         * @static
         * @param {multiverse.IUniverseDetails} message UniverseDetails message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UniverseDetails.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UniverseDetails message from the specified reader or buffer.
         * @function decode
         * @memberof multiverse.UniverseDetails
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multiverse.UniverseDetails} UniverseDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UniverseDetails.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multiverse.UniverseDetails();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 7872837: {
                        message.name = reader.string();
                        break;
                    }
                case 761222: {
                        message.description = $root.multiverse.Content.decode(reader, reader.uint32());
                        break;
                    }
                case 112362: {
                        message.thumbnail = $root.multiverse.Image.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UniverseDetails message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multiverse.UniverseDetails
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multiverse.UniverseDetails} UniverseDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UniverseDetails.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UniverseDetails message.
         * @function verify
         * @memberof multiverse.UniverseDetails
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UniverseDetails.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.description != null && message.hasOwnProperty("description")) {
                var error = $root.multiverse.Content.verify(message.description);
                if (error)
                    return "description." + error;
            }
            if (message.thumbnail != null && message.hasOwnProperty("thumbnail")) {
                var error = $root.multiverse.Image.verify(message.thumbnail);
                if (error)
                    return "thumbnail." + error;
            }
            return null;
        };

        /**
         * Creates an UniverseDetails message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multiverse.UniverseDetails
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multiverse.UniverseDetails} UniverseDetails
         */
        UniverseDetails.fromObject = function fromObject(object) {
            if (object instanceof $root.multiverse.UniverseDetails)
                return object;
            var message = new $root.multiverse.UniverseDetails();
            if (object.name != null)
                message.name = String(object.name);
            if (object.description != null) {
                if (typeof object.description !== "object")
                    throw TypeError(".multiverse.UniverseDetails.description: object expected");
                message.description = $root.multiverse.Content.fromObject(object.description);
            }
            if (object.thumbnail != null) {
                if (typeof object.thumbnail !== "object")
                    throw TypeError(".multiverse.UniverseDetails.thumbnail: object expected");
                message.thumbnail = $root.multiverse.Image.fromObject(object.thumbnail);
            }
            return message;
        };

        /**
         * Creates a plain object from an UniverseDetails message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multiverse.UniverseDetails
         * @static
         * @param {multiverse.UniverseDetails} message UniverseDetails
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UniverseDetails.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.thumbnail = null;
                object.description = null;
                object.name = "";
            }
            if (message.thumbnail != null && message.hasOwnProperty("thumbnail"))
                object.thumbnail = $root.multiverse.Image.toObject(message.thumbnail, options);
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = $root.multiverse.Content.toObject(message.description, options);
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this UniverseDetails to JSON.
         * @function toJSON
         * @memberof multiverse.UniverseDetails
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UniverseDetails.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UniverseDetails
         * @function getTypeUrl
         * @memberof multiverse.UniverseDetails
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UniverseDetails.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/multiverse.UniverseDetails";
        };

        return UniverseDetails;
    })();

    multiverse.Universe = (function() {

        /**
         * Properties of an Universe.
         * @memberof multiverse
         * @interface IUniverse
         * @property {multiverse.IUniverseDetails|null} [details] Universe details
         * @property {Array.<multiverse.IPublishedItem>|null} [publishedItems] Universe publishedItems
         */

        /**
         * Constructs a new Universe.
         * @memberof multiverse
         * @classdesc Represents an Universe.
         * @implements IUniverse
         * @constructor
         * @param {multiverse.IUniverse=} [properties] Properties to set
         */
        function Universe(properties) {
            this.publishedItems = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Universe details.
         * @member {multiverse.IUniverseDetails|null|undefined} details
         * @memberof multiverse.Universe
         * @instance
         */
        Universe.prototype.details = null;

        /**
         * Universe publishedItems.
         * @member {Array.<multiverse.IPublishedItem>} publishedItems
         * @memberof multiverse.Universe
         * @instance
         */
        Universe.prototype.publishedItems = $util.emptyArray;

        /**
         * Creates a new Universe instance using the specified properties.
         * @function create
         * @memberof multiverse.Universe
         * @static
         * @param {multiverse.IUniverse=} [properties] Properties to set
         * @returns {multiverse.Universe} Universe instance
         */
        Universe.create = function create(properties) {
            return new Universe(properties);
        };

        /**
         * Encodes the specified Universe message. Does not implicitly {@link multiverse.Universe.verify|verify} messages.
         * @function encode
         * @memberof multiverse.Universe
         * @static
         * @param {multiverse.IUniverse} message Universe message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Universe.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.details != null && Object.hasOwnProperty.call(message, "details"))
                $root.multiverse.UniverseDetails.encode(message.details, writer.uint32(/* id 611112, wireType 2 =*/4888898).fork()).ldelim();
            if (message.publishedItems != null && message.publishedItems.length)
                for (var i = 0; i < message.publishedItems.length; ++i)
                    $root.multiverse.PublishedItem.encode(message.publishedItems[i], writer.uint32(/* id 625362, wireType 2 =*/5002898).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Universe message, length delimited. Does not implicitly {@link multiverse.Universe.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multiverse.Universe
         * @static
         * @param {multiverse.IUniverse} message Universe message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Universe.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Universe message from the specified reader or buffer.
         * @function decode
         * @memberof multiverse.Universe
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multiverse.Universe} Universe
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Universe.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multiverse.Universe();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 611112: {
                        message.details = $root.multiverse.UniverseDetails.decode(reader, reader.uint32());
                        break;
                    }
                case 625362: {
                        if (!(message.publishedItems && message.publishedItems.length))
                            message.publishedItems = [];
                        message.publishedItems.push($root.multiverse.PublishedItem.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Universe message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multiverse.Universe
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multiverse.Universe} Universe
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Universe.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Universe message.
         * @function verify
         * @memberof multiverse.Universe
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Universe.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.details != null && message.hasOwnProperty("details")) {
                var error = $root.multiverse.UniverseDetails.verify(message.details);
                if (error)
                    return "details." + error;
            }
            if (message.publishedItems != null && message.hasOwnProperty("publishedItems")) {
                if (!Array.isArray(message.publishedItems))
                    return "publishedItems: array expected";
                for (var i = 0; i < message.publishedItems.length; ++i) {
                    var error = $root.multiverse.PublishedItem.verify(message.publishedItems[i]);
                    if (error)
                        return "publishedItems." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Universe message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multiverse.Universe
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multiverse.Universe} Universe
         */
        Universe.fromObject = function fromObject(object) {
            if (object instanceof $root.multiverse.Universe)
                return object;
            var message = new $root.multiverse.Universe();
            if (object.details != null) {
                if (typeof object.details !== "object")
                    throw TypeError(".multiverse.Universe.details: object expected");
                message.details = $root.multiverse.UniverseDetails.fromObject(object.details);
            }
            if (object.publishedItems) {
                if (!Array.isArray(object.publishedItems))
                    throw TypeError(".multiverse.Universe.publishedItems: array expected");
                message.publishedItems = [];
                for (var i = 0; i < object.publishedItems.length; ++i) {
                    if (typeof object.publishedItems[i] !== "object")
                        throw TypeError(".multiverse.Universe.publishedItems: object expected");
                    message.publishedItems[i] = $root.multiverse.PublishedItem.fromObject(object.publishedItems[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an Universe message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multiverse.Universe
         * @static
         * @param {multiverse.Universe} message Universe
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Universe.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.publishedItems = [];
            if (options.defaults)
                object.details = null;
            if (message.details != null && message.hasOwnProperty("details"))
                object.details = $root.multiverse.UniverseDetails.toObject(message.details, options);
            if (message.publishedItems && message.publishedItems.length) {
                object.publishedItems = [];
                for (var j = 0; j < message.publishedItems.length; ++j)
                    object.publishedItems[j] = $root.multiverse.PublishedItem.toObject(message.publishedItems[j], options);
            }
            return object;
        };

        /**
         * Converts this Universe to JSON.
         * @function toJSON
         * @memberof multiverse.Universe
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Universe.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Universe
         * @function getTypeUrl
         * @memberof multiverse.Universe
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Universe.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/multiverse.Universe";
        };

        return Universe;
    })();

    multiverse.Article = (function() {

        /**
         * Properties of an Article.
         * @memberof multiverse
         * @interface IArticle
         * @property {string|null} [uuid] Article uuid
         * @property {string|null} [title] Article title
         * @property {string|null} [body] Article body
         * @property {multiverse.IDateTime|null} [createdAt] Article createdAt
         * @property {Array.<string>|null} [test] Article test
         */

        /**
         * Constructs a new Article.
         * @memberof multiverse
         * @classdesc Represents an Article.
         * @implements IArticle
         * @constructor
         * @param {multiverse.IArticle=} [properties] Properties to set
         */
        function Article(properties) {
            this.test = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Article uuid.
         * @member {string} uuid
         * @memberof multiverse.Article
         * @instance
         */
        Article.prototype.uuid = "";

        /**
         * Article title.
         * @member {string} title
         * @memberof multiverse.Article
         * @instance
         */
        Article.prototype.title = "";

        /**
         * Article body.
         * @member {string} body
         * @memberof multiverse.Article
         * @instance
         */
        Article.prototype.body = "";

        /**
         * Article createdAt.
         * @member {multiverse.IDateTime|null|undefined} createdAt
         * @memberof multiverse.Article
         * @instance
         */
        Article.prototype.createdAt = null;

        /**
         * Article test.
         * @member {Array.<string>} test
         * @memberof multiverse.Article
         * @instance
         */
        Article.prototype.test = $util.emptyArray;

        /**
         * Creates a new Article instance using the specified properties.
         * @function create
         * @memberof multiverse.Article
         * @static
         * @param {multiverse.IArticle=} [properties] Properties to set
         * @returns {multiverse.Article} Article instance
         */
        Article.create = function create(properties) {
            return new Article(properties);
        };

        /**
         * Encodes the specified Article message. Does not implicitly {@link multiverse.Article.verify|verify} messages.
         * @function encode
         * @memberof multiverse.Article
         * @static
         * @param {multiverse.IArticle} message Article message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Article.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.test != null && message.test.length)
                for (var i = 0; i < message.test.length; ++i)
                    writer.uint32(/* id 2731, wireType 2 =*/21850).string(message.test[i]);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 28293, wireType 2 =*/226346).string(message.title);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.multiverse.DateTime.encode(message.createdAt, writer.uint32(/* id 42394, wireType 2 =*/339154).fork()).ldelim();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 92823, wireType 2 =*/742586).string(message.uuid);
            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                writer.uint32(/* id 473948, wireType 2 =*/3791586).string(message.body);
            return writer;
        };

        /**
         * Encodes the specified Article message, length delimited. Does not implicitly {@link multiverse.Article.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multiverse.Article
         * @static
         * @param {multiverse.IArticle} message Article message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Article.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Article message from the specified reader or buffer.
         * @function decode
         * @memberof multiverse.Article
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multiverse.Article} Article
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Article.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multiverse.Article();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 92823: {
                        message.uuid = reader.string();
                        break;
                    }
                case 28293: {
                        message.title = reader.string();
                        break;
                    }
                case 473948: {
                        message.body = reader.string();
                        break;
                    }
                case 42394: {
                        message.createdAt = $root.multiverse.DateTime.decode(reader, reader.uint32());
                        break;
                    }
                case 2731: {
                        if (!(message.test && message.test.length))
                            message.test = [];
                        message.test.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Article message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multiverse.Article
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multiverse.Article} Article
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Article.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Article message.
         * @function verify
         * @memberof multiverse.Article
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Article.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!$util.isString(message.body))
                    return "body: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                var error = $root.multiverse.DateTime.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.test != null && message.hasOwnProperty("test")) {
                if (!Array.isArray(message.test))
                    return "test: array expected";
                for (var i = 0; i < message.test.length; ++i)
                    if (!$util.isString(message.test[i]))
                        return "test: string[] expected";
            }
            return null;
        };

        /**
         * Creates an Article message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multiverse.Article
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multiverse.Article} Article
         */
        Article.fromObject = function fromObject(object) {
            if (object instanceof $root.multiverse.Article)
                return object;
            var message = new $root.multiverse.Article();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.title != null)
                message.title = String(object.title);
            if (object.body != null)
                message.body = String(object.body);
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".multiverse.Article.createdAt: object expected");
                message.createdAt = $root.multiverse.DateTime.fromObject(object.createdAt);
            }
            if (object.test) {
                if (!Array.isArray(object.test))
                    throw TypeError(".multiverse.Article.test: array expected");
                message.test = [];
                for (var i = 0; i < object.test.length; ++i)
                    message.test[i] = String(object.test[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an Article message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multiverse.Article
         * @static
         * @param {multiverse.Article} message Article
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Article.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.test = [];
            if (options.defaults) {
                object.title = "";
                object.createdAt = null;
                object.uuid = "";
                object.body = "";
            }
            if (message.test && message.test.length) {
                object.test = [];
                for (var j = 0; j < message.test.length; ++j)
                    object.test[j] = message.test[j];
            }
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.multiverse.DateTime.toObject(message.createdAt, options);
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = message.body;
            return object;
        };

        /**
         * Converts this Article to JSON.
         * @function toJSON
         * @memberof multiverse.Article
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Article.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Article
         * @function getTypeUrl
         * @memberof multiverse.Article
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Article.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/multiverse.Article";
        };

        return Article;
    })();

    multiverse.YouTubeVideo = (function() {

        /**
         * Properties of a YouTubeVideo.
         * @memberof multiverse
         * @interface IYouTubeVideo
         * @property {string|null} [videoId] YouTubeVideo videoId
         */

        /**
         * Constructs a new YouTubeVideo.
         * @memberof multiverse
         * @classdesc Represents a YouTubeVideo.
         * @implements IYouTubeVideo
         * @constructor
         * @param {multiverse.IYouTubeVideo=} [properties] Properties to set
         */
        function YouTubeVideo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * YouTubeVideo videoId.
         * @member {string} videoId
         * @memberof multiverse.YouTubeVideo
         * @instance
         */
        YouTubeVideo.prototype.videoId = "";

        /**
         * Creates a new YouTubeVideo instance using the specified properties.
         * @function create
         * @memberof multiverse.YouTubeVideo
         * @static
         * @param {multiverse.IYouTubeVideo=} [properties] Properties to set
         * @returns {multiverse.YouTubeVideo} YouTubeVideo instance
         */
        YouTubeVideo.create = function create(properties) {
            return new YouTubeVideo(properties);
        };

        /**
         * Encodes the specified YouTubeVideo message. Does not implicitly {@link multiverse.YouTubeVideo.verify|verify} messages.
         * @function encode
         * @memberof multiverse.YouTubeVideo
         * @static
         * @param {multiverse.IYouTubeVideo} message YouTubeVideo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        YouTubeVideo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.videoId != null && Object.hasOwnProperty.call(message, "videoId"))
                writer.uint32(/* id 2372736, wireType 2 =*/18981890).string(message.videoId);
            return writer;
        };

        /**
         * Encodes the specified YouTubeVideo message, length delimited. Does not implicitly {@link multiverse.YouTubeVideo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multiverse.YouTubeVideo
         * @static
         * @param {multiverse.IYouTubeVideo} message YouTubeVideo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        YouTubeVideo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a YouTubeVideo message from the specified reader or buffer.
         * @function decode
         * @memberof multiverse.YouTubeVideo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multiverse.YouTubeVideo} YouTubeVideo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        YouTubeVideo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multiverse.YouTubeVideo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2372736: {
                        message.videoId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a YouTubeVideo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multiverse.YouTubeVideo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multiverse.YouTubeVideo} YouTubeVideo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        YouTubeVideo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a YouTubeVideo message.
         * @function verify
         * @memberof multiverse.YouTubeVideo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        YouTubeVideo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.videoId != null && message.hasOwnProperty("videoId"))
                if (!$util.isString(message.videoId))
                    return "videoId: string expected";
            return null;
        };

        /**
         * Creates a YouTubeVideo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multiverse.YouTubeVideo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multiverse.YouTubeVideo} YouTubeVideo
         */
        YouTubeVideo.fromObject = function fromObject(object) {
            if (object instanceof $root.multiverse.YouTubeVideo)
                return object;
            var message = new $root.multiverse.YouTubeVideo();
            if (object.videoId != null)
                message.videoId = String(object.videoId);
            return message;
        };

        /**
         * Creates a plain object from a YouTubeVideo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multiverse.YouTubeVideo
         * @static
         * @param {multiverse.YouTubeVideo} message YouTubeVideo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        YouTubeVideo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.videoId = "";
            if (message.videoId != null && message.hasOwnProperty("videoId"))
                object.videoId = message.videoId;
            return object;
        };

        /**
         * Converts this YouTubeVideo to JSON.
         * @function toJSON
         * @memberof multiverse.YouTubeVideo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        YouTubeVideo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for YouTubeVideo
         * @function getTypeUrl
         * @memberof multiverse.YouTubeVideo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        YouTubeVideo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/multiverse.YouTubeVideo";
        };

        return YouTubeVideo;
    })();

    multiverse.DateTime = (function() {

        /**
         * Properties of a DateTime.
         * @memberof multiverse
         * @interface IDateTime
         * @property {number|Long|null} [unixTimestamp] DateTime unixTimestamp
         */

        /**
         * Constructs a new DateTime.
         * @memberof multiverse
         * @classdesc Represents a DateTime.
         * @implements IDateTime
         * @constructor
         * @param {multiverse.IDateTime=} [properties] Properties to set
         */
        function DateTime(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DateTime unixTimestamp.
         * @member {number|Long} unixTimestamp
         * @memberof multiverse.DateTime
         * @instance
         */
        DateTime.prototype.unixTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new DateTime instance using the specified properties.
         * @function create
         * @memberof multiverse.DateTime
         * @static
         * @param {multiverse.IDateTime=} [properties] Properties to set
         * @returns {multiverse.DateTime} DateTime instance
         */
        DateTime.create = function create(properties) {
            return new DateTime(properties);
        };

        /**
         * Encodes the specified DateTime message. Does not implicitly {@link multiverse.DateTime.verify|verify} messages.
         * @function encode
         * @memberof multiverse.DateTime
         * @static
         * @param {multiverse.IDateTime} message DateTime message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DateTime.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.unixTimestamp != null && Object.hasOwnProperty.call(message, "unixTimestamp"))
                writer.uint32(/* id 23947, wireType 0 =*/191576).int64(message.unixTimestamp);
            return writer;
        };

        /**
         * Encodes the specified DateTime message, length delimited. Does not implicitly {@link multiverse.DateTime.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multiverse.DateTime
         * @static
         * @param {multiverse.IDateTime} message DateTime message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DateTime.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DateTime message from the specified reader or buffer.
         * @function decode
         * @memberof multiverse.DateTime
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multiverse.DateTime} DateTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DateTime.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multiverse.DateTime();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 23947: {
                        message.unixTimestamp = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DateTime message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multiverse.DateTime
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multiverse.DateTime} DateTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DateTime.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DateTime message.
         * @function verify
         * @memberof multiverse.DateTime
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DateTime.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.unixTimestamp != null && message.hasOwnProperty("unixTimestamp"))
                if (!$util.isInteger(message.unixTimestamp) && !(message.unixTimestamp && $util.isInteger(message.unixTimestamp.low) && $util.isInteger(message.unixTimestamp.high)))
                    return "unixTimestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a DateTime message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multiverse.DateTime
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multiverse.DateTime} DateTime
         */
        DateTime.fromObject = function fromObject(object) {
            if (object instanceof $root.multiverse.DateTime)
                return object;
            var message = new $root.multiverse.DateTime();
            if (object.unixTimestamp != null)
                if ($util.Long)
                    (message.unixTimestamp = $util.Long.fromValue(object.unixTimestamp)).unsigned = false;
                else if (typeof object.unixTimestamp === "string")
                    message.unixTimestamp = parseInt(object.unixTimestamp, 10);
                else if (typeof object.unixTimestamp === "number")
                    message.unixTimestamp = object.unixTimestamp;
                else if (typeof object.unixTimestamp === "object")
                    message.unixTimestamp = new $util.LongBits(object.unixTimestamp.low >>> 0, object.unixTimestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a DateTime message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multiverse.DateTime
         * @static
         * @param {multiverse.DateTime} message DateTime
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DateTime.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.unixTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.unixTimestamp = options.longs === String ? "0" : 0;
            if (message.unixTimestamp != null && message.hasOwnProperty("unixTimestamp"))
                if (typeof message.unixTimestamp === "number")
                    object.unixTimestamp = options.longs === String ? String(message.unixTimestamp) : message.unixTimestamp;
                else
                    object.unixTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.unixTimestamp) : options.longs === Number ? new $util.LongBits(message.unixTimestamp.low >>> 0, message.unixTimestamp.high >>> 0).toNumber() : message.unixTimestamp;
            return object;
        };

        /**
         * Converts this DateTime to JSON.
         * @function toJSON
         * @memberof multiverse.DateTime
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DateTime.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DateTime
         * @function getTypeUrl
         * @memberof multiverse.DateTime
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DateTime.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/multiverse.DateTime";
        };

        return DateTime;
    })();

    multiverse.URL = (function() {

        /**
         * Properties of a URL.
         * @memberof multiverse
         * @interface IURL
         * @property {string|null} [url] URL url
         */

        /**
         * Constructs a new URL.
         * @memberof multiverse
         * @classdesc Represents a URL.
         * @implements IURL
         * @constructor
         * @param {multiverse.IURL=} [properties] Properties to set
         */
        function URL(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * URL url.
         * @member {string} url
         * @memberof multiverse.URL
         * @instance
         */
        URL.prototype.url = "";

        /**
         * Creates a new URL instance using the specified properties.
         * @function create
         * @memberof multiverse.URL
         * @static
         * @param {multiverse.IURL=} [properties] Properties to set
         * @returns {multiverse.URL} URL instance
         */
        URL.create = function create(properties) {
            return new URL(properties);
        };

        /**
         * Encodes the specified URL message. Does not implicitly {@link multiverse.URL.verify|verify} messages.
         * @function encode
         * @memberof multiverse.URL
         * @static
         * @param {multiverse.IURL} message URL message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        URL.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 956450, wireType 2 =*/7651602).string(message.url);
            return writer;
        };

        /**
         * Encodes the specified URL message, length delimited. Does not implicitly {@link multiverse.URL.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multiverse.URL
         * @static
         * @param {multiverse.IURL} message URL message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        URL.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a URL message from the specified reader or buffer.
         * @function decode
         * @memberof multiverse.URL
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multiverse.URL} URL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        URL.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multiverse.URL();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 956450: {
                        message.url = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a URL message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multiverse.URL
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multiverse.URL} URL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        URL.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a URL message.
         * @function verify
         * @memberof multiverse.URL
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        URL.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };

        /**
         * Creates a URL message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multiverse.URL
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multiverse.URL} URL
         */
        URL.fromObject = function fromObject(object) {
            if (object instanceof $root.multiverse.URL)
                return object;
            var message = new $root.multiverse.URL();
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };

        /**
         * Creates a plain object from a URL message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multiverse.URL
         * @static
         * @param {multiverse.URL} message URL
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        URL.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.url = "";
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };

        /**
         * Converts this URL to JSON.
         * @function toJSON
         * @memberof multiverse.URL
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        URL.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for URL
         * @function getTypeUrl
         * @memberof multiverse.URL
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        URL.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/multiverse.URL";
        };

        return URL;
    })();

    /**
     * StarRating enum.
     * @name multiverse.StarRating
     * @enum {number}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} ONE_STAR=1 ONE_STAR value
     * @property {number} TWO_STARS=2 TWO_STARS value
     * @property {number} THREE_STARS=3 THREE_STARS value
     * @property {number} FOUR_STARS=4 FOUR_STARS value
     * @property {number} FIVE_STARS=5 FIVE_STARS value
     */
    multiverse.StarRating = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[1] = "ONE_STAR"] = 1;
        values[valuesById[2] = "TWO_STARS"] = 2;
        values[valuesById[3] = "THREE_STARS"] = 3;
        values[valuesById[4] = "FOUR_STARS"] = 4;
        values[valuesById[5] = "FIVE_STARS"] = 5;
        return values;
    })();

    multiverse.Rating = (function() {

        /**
         * Properties of a Rating.
         * @memberof multiverse
         * @interface IRating
         * @property {multiverse.IMovie|null} [movie] Rating movie
         * @property {multiverse.IExternalResource|null} [externalResource] Rating externalResource
         * @property {multiverse.IAmazonProduct|null} [amazonProduct] Rating amazonProduct
         * @property {multiverse.IGitHubAccount|null} [githubAccount] Rating githubAccount
         * @property {multiverse.IGitHubRepo|null} [githubRepo] Rating githubRepo
         * @property {multiverse.IYouTubeVideo|null} [youtubeVideo] Rating youtubeVideo
         * @property {multiverse.StarRating|null} [starRating] Rating starRating
         */

        /**
         * Constructs a new Rating.
         * @memberof multiverse
         * @classdesc Represents a Rating.
         * @implements IRating
         * @constructor
         * @param {multiverse.IRating=} [properties] Properties to set
         */
        function Rating(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Rating movie.
         * @member {multiverse.IMovie|null|undefined} movie
         * @memberof multiverse.Rating
         * @instance
         */
        Rating.prototype.movie = null;

        /**
         * Rating externalResource.
         * @member {multiverse.IExternalResource|null|undefined} externalResource
         * @memberof multiverse.Rating
         * @instance
         */
        Rating.prototype.externalResource = null;

        /**
         * Rating amazonProduct.
         * @member {multiverse.IAmazonProduct|null|undefined} amazonProduct
         * @memberof multiverse.Rating
         * @instance
         */
        Rating.prototype.amazonProduct = null;

        /**
         * Rating githubAccount.
         * @member {multiverse.IGitHubAccount|null|undefined} githubAccount
         * @memberof multiverse.Rating
         * @instance
         */
        Rating.prototype.githubAccount = null;

        /**
         * Rating githubRepo.
         * @member {multiverse.IGitHubRepo|null|undefined} githubRepo
         * @memberof multiverse.Rating
         * @instance
         */
        Rating.prototype.githubRepo = null;

        /**
         * Rating youtubeVideo.
         * @member {multiverse.IYouTubeVideo|null|undefined} youtubeVideo
         * @memberof multiverse.Rating
         * @instance
         */
        Rating.prototype.youtubeVideo = null;

        /**
         * Rating starRating.
         * @member {multiverse.StarRating} starRating
         * @memberof multiverse.Rating
         * @instance
         */
        Rating.prototype.starRating = 0;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Rating subject.
         * @member {"movie"|"externalResource"|"amazonProduct"|"githubAccount"|"githubRepo"|"youtubeVideo"|undefined} subject
         * @memberof multiverse.Rating
         * @instance
         */
        Object.defineProperty(Rating.prototype, "subject", {
            get: $util.oneOfGetter($oneOfFields = ["movie", "externalResource", "amazonProduct", "githubAccount", "githubRepo", "youtubeVideo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Rating instance using the specified properties.
         * @function create
         * @memberof multiverse.Rating
         * @static
         * @param {multiverse.IRating=} [properties] Properties to set
         * @returns {multiverse.Rating} Rating instance
         */
        Rating.create = function create(properties) {
            return new Rating(properties);
        };

        /**
         * Encodes the specified Rating message. Does not implicitly {@link multiverse.Rating.verify|verify} messages.
         * @function encode
         * @memberof multiverse.Rating
         * @static
         * @param {multiverse.IRating} message Rating message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rating.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.externalResource != null && Object.hasOwnProperty.call(message, "externalResource"))
                $root.multiverse.ExternalResource.encode(message.externalResource, writer.uint32(/* id 32932, wireType 2 =*/263458).fork()).ldelim();
            if (message.amazonProduct != null && Object.hasOwnProperty.call(message, "amazonProduct"))
                $root.multiverse.AmazonProduct.encode(message.amazonProduct, writer.uint32(/* id 387423, wireType 2 =*/3099386).fork()).ldelim();
            if (message.starRating != null && Object.hasOwnProperty.call(message, "starRating"))
                writer.uint32(/* id 521667, wireType 0 =*/4173336).int32(message.starRating);
            if (message.githubRepo != null && Object.hasOwnProperty.call(message, "githubRepo"))
                $root.multiverse.GitHubRepo.encode(message.githubRepo, writer.uint32(/* id 661827, wireType 2 =*/5294618).fork()).ldelim();
            if (message.movie != null && Object.hasOwnProperty.call(message, "movie"))
                $root.multiverse.Movie.encode(message.movie, writer.uint32(/* id 724351, wireType 2 =*/5794810).fork()).ldelim();
            if (message.githubAccount != null && Object.hasOwnProperty.call(message, "githubAccount"))
                $root.multiverse.GitHubAccount.encode(message.githubAccount, writer.uint32(/* id 827312, wireType 2 =*/6618498).fork()).ldelim();
            if (message.youtubeVideo != null && Object.hasOwnProperty.call(message, "youtubeVideo"))
                $root.multiverse.YouTubeVideo.encode(message.youtubeVideo, writer.uint32(/* id 931237, wireType 2 =*/7449898).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Rating message, length delimited. Does not implicitly {@link multiverse.Rating.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multiverse.Rating
         * @static
         * @param {multiverse.IRating} message Rating message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rating.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Rating message from the specified reader or buffer.
         * @function decode
         * @memberof multiverse.Rating
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multiverse.Rating} Rating
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rating.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multiverse.Rating();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 724351: {
                        message.movie = $root.multiverse.Movie.decode(reader, reader.uint32());
                        break;
                    }
                case 32932: {
                        message.externalResource = $root.multiverse.ExternalResource.decode(reader, reader.uint32());
                        break;
                    }
                case 387423: {
                        message.amazonProduct = $root.multiverse.AmazonProduct.decode(reader, reader.uint32());
                        break;
                    }
                case 827312: {
                        message.githubAccount = $root.multiverse.GitHubAccount.decode(reader, reader.uint32());
                        break;
                    }
                case 661827: {
                        message.githubRepo = $root.multiverse.GitHubRepo.decode(reader, reader.uint32());
                        break;
                    }
                case 931237: {
                        message.youtubeVideo = $root.multiverse.YouTubeVideo.decode(reader, reader.uint32());
                        break;
                    }
                case 521667: {
                        message.starRating = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Rating message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multiverse.Rating
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multiverse.Rating} Rating
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rating.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Rating message.
         * @function verify
         * @memberof multiverse.Rating
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Rating.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.movie != null && message.hasOwnProperty("movie")) {
                properties.subject = 1;
                {
                    var error = $root.multiverse.Movie.verify(message.movie);
                    if (error)
                        return "movie." + error;
                }
            }
            if (message.externalResource != null && message.hasOwnProperty("externalResource")) {
                if (properties.subject === 1)
                    return "subject: multiple values";
                properties.subject = 1;
                {
                    var error = $root.multiverse.ExternalResource.verify(message.externalResource);
                    if (error)
                        return "externalResource." + error;
                }
            }
            if (message.amazonProduct != null && message.hasOwnProperty("amazonProduct")) {
                if (properties.subject === 1)
                    return "subject: multiple values";
                properties.subject = 1;
                {
                    var error = $root.multiverse.AmazonProduct.verify(message.amazonProduct);
                    if (error)
                        return "amazonProduct." + error;
                }
            }
            if (message.githubAccount != null && message.hasOwnProperty("githubAccount")) {
                if (properties.subject === 1)
                    return "subject: multiple values";
                properties.subject = 1;
                {
                    var error = $root.multiverse.GitHubAccount.verify(message.githubAccount);
                    if (error)
                        return "githubAccount." + error;
                }
            }
            if (message.githubRepo != null && message.hasOwnProperty("githubRepo")) {
                if (properties.subject === 1)
                    return "subject: multiple values";
                properties.subject = 1;
                {
                    var error = $root.multiverse.GitHubRepo.verify(message.githubRepo);
                    if (error)
                        return "githubRepo." + error;
                }
            }
            if (message.youtubeVideo != null && message.hasOwnProperty("youtubeVideo")) {
                if (properties.subject === 1)
                    return "subject: multiple values";
                properties.subject = 1;
                {
                    var error = $root.multiverse.YouTubeVideo.verify(message.youtubeVideo);
                    if (error)
                        return "youtubeVideo." + error;
                }
            }
            if (message.starRating != null && message.hasOwnProperty("starRating"))
                switch (message.starRating) {
                default:
                    return "starRating: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            return null;
        };

        /**
         * Creates a Rating message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multiverse.Rating
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multiverse.Rating} Rating
         */
        Rating.fromObject = function fromObject(object) {
            if (object instanceof $root.multiverse.Rating)
                return object;
            var message = new $root.multiverse.Rating();
            if (object.movie != null) {
                if (typeof object.movie !== "object")
                    throw TypeError(".multiverse.Rating.movie: object expected");
                message.movie = $root.multiverse.Movie.fromObject(object.movie);
            }
            if (object.externalResource != null) {
                if (typeof object.externalResource !== "object")
                    throw TypeError(".multiverse.Rating.externalResource: object expected");
                message.externalResource = $root.multiverse.ExternalResource.fromObject(object.externalResource);
            }
            if (object.amazonProduct != null) {
                if (typeof object.amazonProduct !== "object")
                    throw TypeError(".multiverse.Rating.amazonProduct: object expected");
                message.amazonProduct = $root.multiverse.AmazonProduct.fromObject(object.amazonProduct);
            }
            if (object.githubAccount != null) {
                if (typeof object.githubAccount !== "object")
                    throw TypeError(".multiverse.Rating.githubAccount: object expected");
                message.githubAccount = $root.multiverse.GitHubAccount.fromObject(object.githubAccount);
            }
            if (object.githubRepo != null) {
                if (typeof object.githubRepo !== "object")
                    throw TypeError(".multiverse.Rating.githubRepo: object expected");
                message.githubRepo = $root.multiverse.GitHubRepo.fromObject(object.githubRepo);
            }
            if (object.youtubeVideo != null) {
                if (typeof object.youtubeVideo !== "object")
                    throw TypeError(".multiverse.Rating.youtubeVideo: object expected");
                message.youtubeVideo = $root.multiverse.YouTubeVideo.fromObject(object.youtubeVideo);
            }
            switch (object.starRating) {
            default:
                if (typeof object.starRating === "number") {
                    message.starRating = object.starRating;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.starRating = 0;
                break;
            case "ONE_STAR":
            case 1:
                message.starRating = 1;
                break;
            case "TWO_STARS":
            case 2:
                message.starRating = 2;
                break;
            case "THREE_STARS":
            case 3:
                message.starRating = 3;
                break;
            case "FOUR_STARS":
            case 4:
                message.starRating = 4;
                break;
            case "FIVE_STARS":
            case 5:
                message.starRating = 5;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Rating message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multiverse.Rating
         * @static
         * @param {multiverse.Rating} message Rating
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Rating.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.starRating = options.enums === String ? "UNKNOWN" : 0;
            if (message.externalResource != null && message.hasOwnProperty("externalResource")) {
                object.externalResource = $root.multiverse.ExternalResource.toObject(message.externalResource, options);
                if (options.oneofs)
                    object.subject = "externalResource";
            }
            if (message.amazonProduct != null && message.hasOwnProperty("amazonProduct")) {
                object.amazonProduct = $root.multiverse.AmazonProduct.toObject(message.amazonProduct, options);
                if (options.oneofs)
                    object.subject = "amazonProduct";
            }
            if (message.starRating != null && message.hasOwnProperty("starRating"))
                object.starRating = options.enums === String ? $root.multiverse.StarRating[message.starRating] === undefined ? message.starRating : $root.multiverse.StarRating[message.starRating] : message.starRating;
            if (message.githubRepo != null && message.hasOwnProperty("githubRepo")) {
                object.githubRepo = $root.multiverse.GitHubRepo.toObject(message.githubRepo, options);
                if (options.oneofs)
                    object.subject = "githubRepo";
            }
            if (message.movie != null && message.hasOwnProperty("movie")) {
                object.movie = $root.multiverse.Movie.toObject(message.movie, options);
                if (options.oneofs)
                    object.subject = "movie";
            }
            if (message.githubAccount != null && message.hasOwnProperty("githubAccount")) {
                object.githubAccount = $root.multiverse.GitHubAccount.toObject(message.githubAccount, options);
                if (options.oneofs)
                    object.subject = "githubAccount";
            }
            if (message.youtubeVideo != null && message.hasOwnProperty("youtubeVideo")) {
                object.youtubeVideo = $root.multiverse.YouTubeVideo.toObject(message.youtubeVideo, options);
                if (options.oneofs)
                    object.subject = "youtubeVideo";
            }
            return object;
        };

        /**
         * Converts this Rating to JSON.
         * @function toJSON
         * @memberof multiverse.Rating
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Rating.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Rating
         * @function getTypeUrl
         * @memberof multiverse.Rating
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Rating.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/multiverse.Rating";
        };

        return Rating;
    })();

    multiverse.AmazonProduct = (function() {

        /**
         * Properties of an AmazonProduct.
         * @memberof multiverse
         * @interface IAmazonProduct
         * @property {string|null} [asin] AmazonProduct asin
         */

        /**
         * Constructs a new AmazonProduct.
         * @memberof multiverse
         * @classdesc Represents an AmazonProduct.
         * @implements IAmazonProduct
         * @constructor
         * @param {multiverse.IAmazonProduct=} [properties] Properties to set
         */
        function AmazonProduct(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AmazonProduct asin.
         * @member {string} asin
         * @memberof multiverse.AmazonProduct
         * @instance
         */
        AmazonProduct.prototype.asin = "";

        /**
         * Creates a new AmazonProduct instance using the specified properties.
         * @function create
         * @memberof multiverse.AmazonProduct
         * @static
         * @param {multiverse.IAmazonProduct=} [properties] Properties to set
         * @returns {multiverse.AmazonProduct} AmazonProduct instance
         */
        AmazonProduct.create = function create(properties) {
            return new AmazonProduct(properties);
        };

        /**
         * Encodes the specified AmazonProduct message. Does not implicitly {@link multiverse.AmazonProduct.verify|verify} messages.
         * @function encode
         * @memberof multiverse.AmazonProduct
         * @static
         * @param {multiverse.IAmazonProduct} message AmazonProduct message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AmazonProduct.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.asin != null && Object.hasOwnProperty.call(message, "asin"))
                writer.uint32(/* id 87273, wireType 2 =*/698186).string(message.asin);
            return writer;
        };

        /**
         * Encodes the specified AmazonProduct message, length delimited. Does not implicitly {@link multiverse.AmazonProduct.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multiverse.AmazonProduct
         * @static
         * @param {multiverse.IAmazonProduct} message AmazonProduct message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AmazonProduct.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AmazonProduct message from the specified reader or buffer.
         * @function decode
         * @memberof multiverse.AmazonProduct
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multiverse.AmazonProduct} AmazonProduct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AmazonProduct.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multiverse.AmazonProduct();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 87273: {
                        message.asin = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AmazonProduct message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multiverse.AmazonProduct
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multiverse.AmazonProduct} AmazonProduct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AmazonProduct.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AmazonProduct message.
         * @function verify
         * @memberof multiverse.AmazonProduct
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AmazonProduct.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.asin != null && message.hasOwnProperty("asin"))
                if (!$util.isString(message.asin))
                    return "asin: string expected";
            return null;
        };

        /**
         * Creates an AmazonProduct message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multiverse.AmazonProduct
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multiverse.AmazonProduct} AmazonProduct
         */
        AmazonProduct.fromObject = function fromObject(object) {
            if (object instanceof $root.multiverse.AmazonProduct)
                return object;
            var message = new $root.multiverse.AmazonProduct();
            if (object.asin != null)
                message.asin = String(object.asin);
            return message;
        };

        /**
         * Creates a plain object from an AmazonProduct message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multiverse.AmazonProduct
         * @static
         * @param {multiverse.AmazonProduct} message AmazonProduct
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AmazonProduct.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.asin = "";
            if (message.asin != null && message.hasOwnProperty("asin"))
                object.asin = message.asin;
            return object;
        };

        /**
         * Converts this AmazonProduct to JSON.
         * @function toJSON
         * @memberof multiverse.AmazonProduct
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AmazonProduct.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AmazonProduct
         * @function getTypeUrl
         * @memberof multiverse.AmazonProduct
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AmazonProduct.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/multiverse.AmazonProduct";
        };

        return AmazonProduct;
    })();

    multiverse.Movie = (function() {

        /**
         * Properties of a Movie.
         * @memberof multiverse
         * @interface IMovie
         * @property {string|null} [imdbId] Movie imdbId
         */

        /**
         * Constructs a new Movie.
         * @memberof multiverse
         * @classdesc Represents a Movie.
         * @implements IMovie
         * @constructor
         * @param {multiverse.IMovie=} [properties] Properties to set
         */
        function Movie(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Movie imdbId.
         * @member {string} imdbId
         * @memberof multiverse.Movie
         * @instance
         */
        Movie.prototype.imdbId = "";

        /**
         * Creates a new Movie instance using the specified properties.
         * @function create
         * @memberof multiverse.Movie
         * @static
         * @param {multiverse.IMovie=} [properties] Properties to set
         * @returns {multiverse.Movie} Movie instance
         */
        Movie.create = function create(properties) {
            return new Movie(properties);
        };

        /**
         * Encodes the specified Movie message. Does not implicitly {@link multiverse.Movie.verify|verify} messages.
         * @function encode
         * @memberof multiverse.Movie
         * @static
         * @param {multiverse.IMovie} message Movie message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Movie.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.imdbId != null && Object.hasOwnProperty.call(message, "imdbId"))
                writer.uint32(/* id 941667, wireType 2 =*/7533338).string(message.imdbId);
            return writer;
        };

        /**
         * Encodes the specified Movie message, length delimited. Does not implicitly {@link multiverse.Movie.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multiverse.Movie
         * @static
         * @param {multiverse.IMovie} message Movie message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Movie.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Movie message from the specified reader or buffer.
         * @function decode
         * @memberof multiverse.Movie
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multiverse.Movie} Movie
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Movie.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multiverse.Movie();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 941667: {
                        message.imdbId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Movie message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multiverse.Movie
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multiverse.Movie} Movie
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Movie.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Movie message.
         * @function verify
         * @memberof multiverse.Movie
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Movie.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.imdbId != null && message.hasOwnProperty("imdbId"))
                if (!$util.isString(message.imdbId))
                    return "imdbId: string expected";
            return null;
        };

        /**
         * Creates a Movie message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multiverse.Movie
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multiverse.Movie} Movie
         */
        Movie.fromObject = function fromObject(object) {
            if (object instanceof $root.multiverse.Movie)
                return object;
            var message = new $root.multiverse.Movie();
            if (object.imdbId != null)
                message.imdbId = String(object.imdbId);
            return message;
        };

        /**
         * Creates a plain object from a Movie message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multiverse.Movie
         * @static
         * @param {multiverse.Movie} message Movie
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Movie.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.imdbId = "";
            if (message.imdbId != null && message.hasOwnProperty("imdbId"))
                object.imdbId = message.imdbId;
            return object;
        };

        /**
         * Converts this Movie to JSON.
         * @function toJSON
         * @memberof multiverse.Movie
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Movie.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Movie
         * @function getTypeUrl
         * @memberof multiverse.Movie
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Movie.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/multiverse.Movie";
        };

        return Movie;
    })();

    multiverse.GitHubAccount = (function() {

        /**
         * Properties of a GitHubAccount.
         * @memberof multiverse
         * @interface IGitHubAccount
         * @property {string|null} [name] GitHubAccount name
         */

        /**
         * Constructs a new GitHubAccount.
         * @memberof multiverse
         * @classdesc Represents a GitHubAccount.
         * @implements IGitHubAccount
         * @constructor
         * @param {multiverse.IGitHubAccount=} [properties] Properties to set
         */
        function GitHubAccount(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GitHubAccount name.
         * @member {string} name
         * @memberof multiverse.GitHubAccount
         * @instance
         */
        GitHubAccount.prototype.name = "";

        /**
         * Creates a new GitHubAccount instance using the specified properties.
         * @function create
         * @memberof multiverse.GitHubAccount
         * @static
         * @param {multiverse.IGitHubAccount=} [properties] Properties to set
         * @returns {multiverse.GitHubAccount} GitHubAccount instance
         */
        GitHubAccount.create = function create(properties) {
            return new GitHubAccount(properties);
        };

        /**
         * Encodes the specified GitHubAccount message. Does not implicitly {@link multiverse.GitHubAccount.verify|verify} messages.
         * @function encode
         * @memberof multiverse.GitHubAccount
         * @static
         * @param {multiverse.IGitHubAccount} message GitHubAccount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GitHubAccount.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 23723, wireType 2 =*/189786).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified GitHubAccount message, length delimited. Does not implicitly {@link multiverse.GitHubAccount.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multiverse.GitHubAccount
         * @static
         * @param {multiverse.IGitHubAccount} message GitHubAccount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GitHubAccount.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GitHubAccount message from the specified reader or buffer.
         * @function decode
         * @memberof multiverse.GitHubAccount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multiverse.GitHubAccount} GitHubAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GitHubAccount.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multiverse.GitHubAccount();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 23723: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GitHubAccount message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multiverse.GitHubAccount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multiverse.GitHubAccount} GitHubAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GitHubAccount.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GitHubAccount message.
         * @function verify
         * @memberof multiverse.GitHubAccount
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GitHubAccount.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a GitHubAccount message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multiverse.GitHubAccount
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multiverse.GitHubAccount} GitHubAccount
         */
        GitHubAccount.fromObject = function fromObject(object) {
            if (object instanceof $root.multiverse.GitHubAccount)
                return object;
            var message = new $root.multiverse.GitHubAccount();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a GitHubAccount message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multiverse.GitHubAccount
         * @static
         * @param {multiverse.GitHubAccount} message GitHubAccount
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GitHubAccount.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this GitHubAccount to JSON.
         * @function toJSON
         * @memberof multiverse.GitHubAccount
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GitHubAccount.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GitHubAccount
         * @function getTypeUrl
         * @memberof multiverse.GitHubAccount
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GitHubAccount.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/multiverse.GitHubAccount";
        };

        return GitHubAccount;
    })();

    multiverse.GitHubRepo = (function() {

        /**
         * Properties of a GitHubRepo.
         * @memberof multiverse
         * @interface IGitHubRepo
         * @property {multiverse.IGitHubAccount|null} [owner] GitHubRepo owner
         * @property {string|null} [name] GitHubRepo name
         */

        /**
         * Constructs a new GitHubRepo.
         * @memberof multiverse
         * @classdesc Represents a GitHubRepo.
         * @implements IGitHubRepo
         * @constructor
         * @param {multiverse.IGitHubRepo=} [properties] Properties to set
         */
        function GitHubRepo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GitHubRepo owner.
         * @member {multiverse.IGitHubAccount|null|undefined} owner
         * @memberof multiverse.GitHubRepo
         * @instance
         */
        GitHubRepo.prototype.owner = null;

        /**
         * GitHubRepo name.
         * @member {string} name
         * @memberof multiverse.GitHubRepo
         * @instance
         */
        GitHubRepo.prototype.name = "";

        /**
         * Creates a new GitHubRepo instance using the specified properties.
         * @function create
         * @memberof multiverse.GitHubRepo
         * @static
         * @param {multiverse.IGitHubRepo=} [properties] Properties to set
         * @returns {multiverse.GitHubRepo} GitHubRepo instance
         */
        GitHubRepo.create = function create(properties) {
            return new GitHubRepo(properties);
        };

        /**
         * Encodes the specified GitHubRepo message. Does not implicitly {@link multiverse.GitHubRepo.verify|verify} messages.
         * @function encode
         * @memberof multiverse.GitHubRepo
         * @static
         * @param {multiverse.IGitHubRepo} message GitHubRepo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GitHubRepo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.owner != null && Object.hasOwnProperty.call(message, "owner"))
                $root.multiverse.GitHubAccount.encode(message.owner, writer.uint32(/* id 89723, wireType 2 =*/717786).fork()).ldelim();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 384293, wireType 2 =*/3074346).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified GitHubRepo message, length delimited. Does not implicitly {@link multiverse.GitHubRepo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multiverse.GitHubRepo
         * @static
         * @param {multiverse.IGitHubRepo} message GitHubRepo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GitHubRepo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GitHubRepo message from the specified reader or buffer.
         * @function decode
         * @memberof multiverse.GitHubRepo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multiverse.GitHubRepo} GitHubRepo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GitHubRepo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multiverse.GitHubRepo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 89723: {
                        message.owner = $root.multiverse.GitHubAccount.decode(reader, reader.uint32());
                        break;
                    }
                case 384293: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GitHubRepo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multiverse.GitHubRepo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multiverse.GitHubRepo} GitHubRepo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GitHubRepo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GitHubRepo message.
         * @function verify
         * @memberof multiverse.GitHubRepo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GitHubRepo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.owner != null && message.hasOwnProperty("owner")) {
                var error = $root.multiverse.GitHubAccount.verify(message.owner);
                if (error)
                    return "owner." + error;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a GitHubRepo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multiverse.GitHubRepo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multiverse.GitHubRepo} GitHubRepo
         */
        GitHubRepo.fromObject = function fromObject(object) {
            if (object instanceof $root.multiverse.GitHubRepo)
                return object;
            var message = new $root.multiverse.GitHubRepo();
            if (object.owner != null) {
                if (typeof object.owner !== "object")
                    throw TypeError(".multiverse.GitHubRepo.owner: object expected");
                message.owner = $root.multiverse.GitHubAccount.fromObject(object.owner);
            }
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a GitHubRepo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multiverse.GitHubRepo
         * @static
         * @param {multiverse.GitHubRepo} message GitHubRepo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GitHubRepo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.owner = null;
                object.name = "";
            }
            if (message.owner != null && message.hasOwnProperty("owner"))
                object.owner = $root.multiverse.GitHubAccount.toObject(message.owner, options);
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this GitHubRepo to JSON.
         * @function toJSON
         * @memberof multiverse.GitHubRepo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GitHubRepo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GitHubRepo
         * @function getTypeUrl
         * @memberof multiverse.GitHubRepo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GitHubRepo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/multiverse.GitHubRepo";
        };

        return GitHubRepo;
    })();

    multiverse.Markdown = (function() {

        /**
         * Properties of a Markdown.
         * @memberof multiverse
         * @interface IMarkdown
         * @property {string|null} [markdown] Markdown markdown
         */

        /**
         * Constructs a new Markdown.
         * @memberof multiverse
         * @classdesc Represents a Markdown.
         * @implements IMarkdown
         * @constructor
         * @param {multiverse.IMarkdown=} [properties] Properties to set
         */
        function Markdown(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Markdown markdown.
         * @member {string} markdown
         * @memberof multiverse.Markdown
         * @instance
         */
        Markdown.prototype.markdown = "";

        /**
         * Creates a new Markdown instance using the specified properties.
         * @function create
         * @memberof multiverse.Markdown
         * @static
         * @param {multiverse.IMarkdown=} [properties] Properties to set
         * @returns {multiverse.Markdown} Markdown instance
         */
        Markdown.create = function create(properties) {
            return new Markdown(properties);
        };

        /**
         * Encodes the specified Markdown message. Does not implicitly {@link multiverse.Markdown.verify|verify} messages.
         * @function encode
         * @memberof multiverse.Markdown
         * @static
         * @param {multiverse.IMarkdown} message Markdown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Markdown.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.markdown != null && Object.hasOwnProperty.call(message, "markdown"))
                writer.uint32(/* id 85270, wireType 2 =*/682162).string(message.markdown);
            return writer;
        };

        /**
         * Encodes the specified Markdown message, length delimited. Does not implicitly {@link multiverse.Markdown.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multiverse.Markdown
         * @static
         * @param {multiverse.IMarkdown} message Markdown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Markdown.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Markdown message from the specified reader or buffer.
         * @function decode
         * @memberof multiverse.Markdown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multiverse.Markdown} Markdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Markdown.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multiverse.Markdown();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 85270: {
                        message.markdown = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Markdown message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multiverse.Markdown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multiverse.Markdown} Markdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Markdown.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Markdown message.
         * @function verify
         * @memberof multiverse.Markdown
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Markdown.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.markdown != null && message.hasOwnProperty("markdown"))
                if (!$util.isString(message.markdown))
                    return "markdown: string expected";
            return null;
        };

        /**
         * Creates a Markdown message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multiverse.Markdown
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multiverse.Markdown} Markdown
         */
        Markdown.fromObject = function fromObject(object) {
            if (object instanceof $root.multiverse.Markdown)
                return object;
            var message = new $root.multiverse.Markdown();
            if (object.markdown != null)
                message.markdown = String(object.markdown);
            return message;
        };

        /**
         * Creates a plain object from a Markdown message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multiverse.Markdown
         * @static
         * @param {multiverse.Markdown} message Markdown
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Markdown.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.markdown = "";
            if (message.markdown != null && message.hasOwnProperty("markdown"))
                object.markdown = message.markdown;
            return object;
        };

        /**
         * Converts this Markdown to JSON.
         * @function toJSON
         * @memberof multiverse.Markdown
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Markdown.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Markdown
         * @function getTypeUrl
         * @memberof multiverse.Markdown
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Markdown.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/multiverse.Markdown";
        };

        return Markdown;
    })();

    multiverse.Content = (function() {

        /**
         * Properties of a Content.
         * @memberof multiverse
         * @interface IContent
         * @property {multiverse.IMarkdown|null} [markdown] Content markdown
         */

        /**
         * Constructs a new Content.
         * @memberof multiverse
         * @classdesc Represents a Content.
         * @implements IContent
         * @constructor
         * @param {multiverse.IContent=} [properties] Properties to set
         */
        function Content(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Content markdown.
         * @member {multiverse.IMarkdown|null|undefined} markdown
         * @memberof multiverse.Content
         * @instance
         */
        Content.prototype.markdown = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Content content.
         * @member {"markdown"|undefined} content
         * @memberof multiverse.Content
         * @instance
         */
        Object.defineProperty(Content.prototype, "content", {
            get: $util.oneOfGetter($oneOfFields = ["markdown"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Content instance using the specified properties.
         * @function create
         * @memberof multiverse.Content
         * @static
         * @param {multiverse.IContent=} [properties] Properties to set
         * @returns {multiverse.Content} Content instance
         */
        Content.create = function create(properties) {
            return new Content(properties);
        };

        /**
         * Encodes the specified Content message. Does not implicitly {@link multiverse.Content.verify|verify} messages.
         * @function encode
         * @memberof multiverse.Content
         * @static
         * @param {multiverse.IContent} message Content message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Content.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.markdown != null && Object.hasOwnProperty.call(message, "markdown"))
                $root.multiverse.Markdown.encode(message.markdown, writer.uint32(/* id 762622, wireType 2 =*/6100978).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Content message, length delimited. Does not implicitly {@link multiverse.Content.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multiverse.Content
         * @static
         * @param {multiverse.IContent} message Content message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Content.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Content message from the specified reader or buffer.
         * @function decode
         * @memberof multiverse.Content
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multiverse.Content} Content
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Content.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multiverse.Content();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 762622: {
                        message.markdown = $root.multiverse.Markdown.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Content message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multiverse.Content
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multiverse.Content} Content
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Content.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Content message.
         * @function verify
         * @memberof multiverse.Content
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Content.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.markdown != null && message.hasOwnProperty("markdown")) {
                properties.content = 1;
                {
                    var error = $root.multiverse.Markdown.verify(message.markdown);
                    if (error)
                        return "markdown." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Content message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multiverse.Content
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multiverse.Content} Content
         */
        Content.fromObject = function fromObject(object) {
            if (object instanceof $root.multiverse.Content)
                return object;
            var message = new $root.multiverse.Content();
            if (object.markdown != null) {
                if (typeof object.markdown !== "object")
                    throw TypeError(".multiverse.Content.markdown: object expected");
                message.markdown = $root.multiverse.Markdown.fromObject(object.markdown);
            }
            return message;
        };

        /**
         * Creates a plain object from a Content message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multiverse.Content
         * @static
         * @param {multiverse.Content} message Content
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Content.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.markdown != null && message.hasOwnProperty("markdown")) {
                object.markdown = $root.multiverse.Markdown.toObject(message.markdown, options);
                if (options.oneofs)
                    object.content = "markdown";
            }
            return object;
        };

        /**
         * Converts this Content to JSON.
         * @function toJSON
         * @memberof multiverse.Content
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Content.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Content
         * @function getTypeUrl
         * @memberof multiverse.Content
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Content.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/multiverse.Content";
        };

        return Content;
    })();

    multiverse.Image = (function() {

        /**
         * Properties of an Image.
         * @memberof multiverse
         * @interface IImage
         * @property {multiverse.IExternalResource|null} [externalResource] Image externalResource
         */

        /**
         * Constructs a new Image.
         * @memberof multiverse
         * @classdesc Represents an Image.
         * @implements IImage
         * @constructor
         * @param {multiverse.IImage=} [properties] Properties to set
         */
        function Image(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Image externalResource.
         * @member {multiverse.IExternalResource|null|undefined} externalResource
         * @memberof multiverse.Image
         * @instance
         */
        Image.prototype.externalResource = null;

        /**
         * Creates a new Image instance using the specified properties.
         * @function create
         * @memberof multiverse.Image
         * @static
         * @param {multiverse.IImage=} [properties] Properties to set
         * @returns {multiverse.Image} Image instance
         */
        Image.create = function create(properties) {
            return new Image(properties);
        };

        /**
         * Encodes the specified Image message. Does not implicitly {@link multiverse.Image.verify|verify} messages.
         * @function encode
         * @memberof multiverse.Image
         * @static
         * @param {multiverse.IImage} message Image message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Image.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.externalResource != null && Object.hasOwnProperty.call(message, "externalResource"))
                $root.multiverse.ExternalResource.encode(message.externalResource, writer.uint32(/* id 211122, wireType 2 =*/1688978).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Image message, length delimited. Does not implicitly {@link multiverse.Image.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multiverse.Image
         * @static
         * @param {multiverse.IImage} message Image message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Image.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Image message from the specified reader or buffer.
         * @function decode
         * @memberof multiverse.Image
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multiverse.Image} Image
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Image.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multiverse.Image();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 211122: {
                        message.externalResource = $root.multiverse.ExternalResource.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Image message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multiverse.Image
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multiverse.Image} Image
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Image.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Image message.
         * @function verify
         * @memberof multiverse.Image
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Image.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.externalResource != null && message.hasOwnProperty("externalResource")) {
                var error = $root.multiverse.ExternalResource.verify(message.externalResource);
                if (error)
                    return "externalResource." + error;
            }
            return null;
        };

        /**
         * Creates an Image message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multiverse.Image
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multiverse.Image} Image
         */
        Image.fromObject = function fromObject(object) {
            if (object instanceof $root.multiverse.Image)
                return object;
            var message = new $root.multiverse.Image();
            if (object.externalResource != null) {
                if (typeof object.externalResource !== "object")
                    throw TypeError(".multiverse.Image.externalResource: object expected");
                message.externalResource = $root.multiverse.ExternalResource.fromObject(object.externalResource);
            }
            return message;
        };

        /**
         * Creates a plain object from an Image message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multiverse.Image
         * @static
         * @param {multiverse.Image} message Image
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Image.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.externalResource = null;
            if (message.externalResource != null && message.hasOwnProperty("externalResource"))
                object.externalResource = $root.multiverse.ExternalResource.toObject(message.externalResource, options);
            return object;
        };

        /**
         * Converts this Image to JSON.
         * @function toJSON
         * @memberof multiverse.Image
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Image.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Image
         * @function getTypeUrl
         * @memberof multiverse.Image
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Image.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/multiverse.Image";
        };

        return Image;
    })();

    multiverse.ExternalResource = (function() {

        /**
         * Properties of an ExternalResource.
         * @memberof multiverse
         * @interface IExternalResource
         * @property {multiverse.IURL|null} [url] ExternalResource url
         * @property {multiverse.IDigest|null} [digest] ExternalResource digest
         */

        /**
         * Constructs a new ExternalResource.
         * @memberof multiverse
         * @classdesc Represents an ExternalResource.
         * @implements IExternalResource
         * @constructor
         * @param {multiverse.IExternalResource=} [properties] Properties to set
         */
        function ExternalResource(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExternalResource url.
         * @member {multiverse.IURL|null|undefined} url
         * @memberof multiverse.ExternalResource
         * @instance
         */
        ExternalResource.prototype.url = null;

        /**
         * ExternalResource digest.
         * @member {multiverse.IDigest|null|undefined} digest
         * @memberof multiverse.ExternalResource
         * @instance
         */
        ExternalResource.prototype.digest = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * ExternalResource resource.
         * @member {"url"|"digest"|undefined} resource
         * @memberof multiverse.ExternalResource
         * @instance
         */
        Object.defineProperty(ExternalResource.prototype, "resource", {
            get: $util.oneOfGetter($oneOfFields = ["url", "digest"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ExternalResource instance using the specified properties.
         * @function create
         * @memberof multiverse.ExternalResource
         * @static
         * @param {multiverse.IExternalResource=} [properties] Properties to set
         * @returns {multiverse.ExternalResource} ExternalResource instance
         */
        ExternalResource.create = function create(properties) {
            return new ExternalResource(properties);
        };

        /**
         * Encodes the specified ExternalResource message. Does not implicitly {@link multiverse.ExternalResource.verify|verify} messages.
         * @function encode
         * @memberof multiverse.ExternalResource
         * @static
         * @param {multiverse.IExternalResource} message ExternalResource message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExternalResource.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                $root.multiverse.URL.encode(message.url, writer.uint32(/* id 32932, wireType 2 =*/263458).fork()).ldelim();
            if (message.digest != null && Object.hasOwnProperty.call(message, "digest"))
                $root.multiverse.Digest.encode(message.digest, writer.uint32(/* id 621112, wireType 2 =*/4968898).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ExternalResource message, length delimited. Does not implicitly {@link multiverse.ExternalResource.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multiverse.ExternalResource
         * @static
         * @param {multiverse.IExternalResource} message ExternalResource message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExternalResource.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExternalResource message from the specified reader or buffer.
         * @function decode
         * @memberof multiverse.ExternalResource
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multiverse.ExternalResource} ExternalResource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExternalResource.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multiverse.ExternalResource();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 32932: {
                        message.url = $root.multiverse.URL.decode(reader, reader.uint32());
                        break;
                    }
                case 621112: {
                        message.digest = $root.multiverse.Digest.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExternalResource message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multiverse.ExternalResource
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multiverse.ExternalResource} ExternalResource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExternalResource.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExternalResource message.
         * @function verify
         * @memberof multiverse.ExternalResource
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExternalResource.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.url != null && message.hasOwnProperty("url")) {
                properties.resource = 1;
                {
                    var error = $root.multiverse.URL.verify(message.url);
                    if (error)
                        return "url." + error;
                }
            }
            if (message.digest != null && message.hasOwnProperty("digest")) {
                if (properties.resource === 1)
                    return "resource: multiple values";
                properties.resource = 1;
                {
                    var error = $root.multiverse.Digest.verify(message.digest);
                    if (error)
                        return "digest." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ExternalResource message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multiverse.ExternalResource
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multiverse.ExternalResource} ExternalResource
         */
        ExternalResource.fromObject = function fromObject(object) {
            if (object instanceof $root.multiverse.ExternalResource)
                return object;
            var message = new $root.multiverse.ExternalResource();
            if (object.url != null) {
                if (typeof object.url !== "object")
                    throw TypeError(".multiverse.ExternalResource.url: object expected");
                message.url = $root.multiverse.URL.fromObject(object.url);
            }
            if (object.digest != null) {
                if (typeof object.digest !== "object")
                    throw TypeError(".multiverse.ExternalResource.digest: object expected");
                message.digest = $root.multiverse.Digest.fromObject(object.digest);
            }
            return message;
        };

        /**
         * Creates a plain object from an ExternalResource message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multiverse.ExternalResource
         * @static
         * @param {multiverse.ExternalResource} message ExternalResource
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExternalResource.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.url != null && message.hasOwnProperty("url")) {
                object.url = $root.multiverse.URL.toObject(message.url, options);
                if (options.oneofs)
                    object.resource = "url";
            }
            if (message.digest != null && message.hasOwnProperty("digest")) {
                object.digest = $root.multiverse.Digest.toObject(message.digest, options);
                if (options.oneofs)
                    object.resource = "digest";
            }
            return object;
        };

        /**
         * Converts this ExternalResource to JSON.
         * @function toJSON
         * @memberof multiverse.ExternalResource
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExternalResource.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ExternalResource
         * @function getTypeUrl
         * @memberof multiverse.ExternalResource
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ExternalResource.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/multiverse.ExternalResource";
        };

        return ExternalResource;
    })();

    multiverse.Digest = (function() {

        /**
         * Properties of a Digest.
         * @memberof multiverse
         * @interface IDigest
         * @property {Uint8Array|null} [sha2_256] Digest sha2_256
         * @property {Uint8Array|null} [sha2_512] Digest sha2_512
         * @property {Uint8Array|null} [sha3_256] Digest sha3_256
         * @property {Uint8Array|null} [sha3_512] Digest sha3_512
         */

        /**
         * Constructs a new Digest.
         * @memberof multiverse
         * @classdesc Represents a Digest.
         * @implements IDigest
         * @constructor
         * @param {multiverse.IDigest=} [properties] Properties to set
         */
        function Digest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Digest sha2_256.
         * @member {Uint8Array} sha2_256
         * @memberof multiverse.Digest
         * @instance
         */
        Digest.prototype.sha2_256 = $util.newBuffer([]);

        /**
         * Digest sha2_512.
         * @member {Uint8Array} sha2_512
         * @memberof multiverse.Digest
         * @instance
         */
        Digest.prototype.sha2_512 = $util.newBuffer([]);

        /**
         * Digest sha3_256.
         * @member {Uint8Array} sha3_256
         * @memberof multiverse.Digest
         * @instance
         */
        Digest.prototype.sha3_256 = $util.newBuffer([]);

        /**
         * Digest sha3_512.
         * @member {Uint8Array} sha3_512
         * @memberof multiverse.Digest
         * @instance
         */
        Digest.prototype.sha3_512 = $util.newBuffer([]);

        /**
         * Creates a new Digest instance using the specified properties.
         * @function create
         * @memberof multiverse.Digest
         * @static
         * @param {multiverse.IDigest=} [properties] Properties to set
         * @returns {multiverse.Digest} Digest instance
         */
        Digest.create = function create(properties) {
            return new Digest(properties);
        };

        /**
         * Encodes the specified Digest message. Does not implicitly {@link multiverse.Digest.verify|verify} messages.
         * @function encode
         * @memberof multiverse.Digest
         * @static
         * @param {multiverse.IDigest} message Digest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Digest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sha3_256 != null && Object.hasOwnProperty.call(message, "sha3_256"))
                writer.uint32(/* id 1287112, wireType 2 =*/10296898).bytes(message.sha3_256);
            if (message.sha2_512 != null && Object.hasOwnProperty.call(message, "sha2_512"))
                writer.uint32(/* id 1627273, wireType 2 =*/13018186).bytes(message.sha2_512);
            if (message.sha3_512 != null && Object.hasOwnProperty.call(message, "sha3_512"))
                writer.uint32(/* id 5441122, wireType 2 =*/43528978).bytes(message.sha3_512);
            if (message.sha2_256 != null && Object.hasOwnProperty.call(message, "sha2_256"))
                writer.uint32(/* id 9812731, wireType 2 =*/78501850).bytes(message.sha2_256);
            return writer;
        };

        /**
         * Encodes the specified Digest message, length delimited. Does not implicitly {@link multiverse.Digest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multiverse.Digest
         * @static
         * @param {multiverse.IDigest} message Digest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Digest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Digest message from the specified reader or buffer.
         * @function decode
         * @memberof multiverse.Digest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multiverse.Digest} Digest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Digest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multiverse.Digest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 9812731: {
                        message.sha2_256 = reader.bytes();
                        break;
                    }
                case 1627273: {
                        message.sha2_512 = reader.bytes();
                        break;
                    }
                case 1287112: {
                        message.sha3_256 = reader.bytes();
                        break;
                    }
                case 5441122: {
                        message.sha3_512 = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Digest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multiverse.Digest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multiverse.Digest} Digest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Digest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Digest message.
         * @function verify
         * @memberof multiverse.Digest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Digest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sha2_256 != null && message.hasOwnProperty("sha2_256"))
                if (!(message.sha2_256 && typeof message.sha2_256.length === "number" || $util.isString(message.sha2_256)))
                    return "sha2_256: buffer expected";
            if (message.sha2_512 != null && message.hasOwnProperty("sha2_512"))
                if (!(message.sha2_512 && typeof message.sha2_512.length === "number" || $util.isString(message.sha2_512)))
                    return "sha2_512: buffer expected";
            if (message.sha3_256 != null && message.hasOwnProperty("sha3_256"))
                if (!(message.sha3_256 && typeof message.sha3_256.length === "number" || $util.isString(message.sha3_256)))
                    return "sha3_256: buffer expected";
            if (message.sha3_512 != null && message.hasOwnProperty("sha3_512"))
                if (!(message.sha3_512 && typeof message.sha3_512.length === "number" || $util.isString(message.sha3_512)))
                    return "sha3_512: buffer expected";
            return null;
        };

        /**
         * Creates a Digest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multiverse.Digest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multiverse.Digest} Digest
         */
        Digest.fromObject = function fromObject(object) {
            if (object instanceof $root.multiverse.Digest)
                return object;
            var message = new $root.multiverse.Digest();
            if (object.sha2_256 != null)
                if (typeof object.sha2_256 === "string")
                    $util.base64.decode(object.sha2_256, message.sha2_256 = $util.newBuffer($util.base64.length(object.sha2_256)), 0);
                else if (object.sha2_256.length >= 0)
                    message.sha2_256 = object.sha2_256;
            if (object.sha2_512 != null)
                if (typeof object.sha2_512 === "string")
                    $util.base64.decode(object.sha2_512, message.sha2_512 = $util.newBuffer($util.base64.length(object.sha2_512)), 0);
                else if (object.sha2_512.length >= 0)
                    message.sha2_512 = object.sha2_512;
            if (object.sha3_256 != null)
                if (typeof object.sha3_256 === "string")
                    $util.base64.decode(object.sha3_256, message.sha3_256 = $util.newBuffer($util.base64.length(object.sha3_256)), 0);
                else if (object.sha3_256.length >= 0)
                    message.sha3_256 = object.sha3_256;
            if (object.sha3_512 != null)
                if (typeof object.sha3_512 === "string")
                    $util.base64.decode(object.sha3_512, message.sha3_512 = $util.newBuffer($util.base64.length(object.sha3_512)), 0);
                else if (object.sha3_512.length >= 0)
                    message.sha3_512 = object.sha3_512;
            return message;
        };

        /**
         * Creates a plain object from a Digest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multiverse.Digest
         * @static
         * @param {multiverse.Digest} message Digest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Digest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.sha3_256 = "";
                else {
                    object.sha3_256 = [];
                    if (options.bytes !== Array)
                        object.sha3_256 = $util.newBuffer(object.sha3_256);
                }
                if (options.bytes === String)
                    object.sha2_512 = "";
                else {
                    object.sha2_512 = [];
                    if (options.bytes !== Array)
                        object.sha2_512 = $util.newBuffer(object.sha2_512);
                }
                if (options.bytes === String)
                    object.sha3_512 = "";
                else {
                    object.sha3_512 = [];
                    if (options.bytes !== Array)
                        object.sha3_512 = $util.newBuffer(object.sha3_512);
                }
                if (options.bytes === String)
                    object.sha2_256 = "";
                else {
                    object.sha2_256 = [];
                    if (options.bytes !== Array)
                        object.sha2_256 = $util.newBuffer(object.sha2_256);
                }
            }
            if (message.sha3_256 != null && message.hasOwnProperty("sha3_256"))
                object.sha3_256 = options.bytes === String ? $util.base64.encode(message.sha3_256, 0, message.sha3_256.length) : options.bytes === Array ? Array.prototype.slice.call(message.sha3_256) : message.sha3_256;
            if (message.sha2_512 != null && message.hasOwnProperty("sha2_512"))
                object.sha2_512 = options.bytes === String ? $util.base64.encode(message.sha2_512, 0, message.sha2_512.length) : options.bytes === Array ? Array.prototype.slice.call(message.sha2_512) : message.sha2_512;
            if (message.sha3_512 != null && message.hasOwnProperty("sha3_512"))
                object.sha3_512 = options.bytes === String ? $util.base64.encode(message.sha3_512, 0, message.sha3_512.length) : options.bytes === Array ? Array.prototype.slice.call(message.sha3_512) : message.sha3_512;
            if (message.sha2_256 != null && message.hasOwnProperty("sha2_256"))
                object.sha2_256 = options.bytes === String ? $util.base64.encode(message.sha2_256, 0, message.sha2_256.length) : options.bytes === Array ? Array.prototype.slice.call(message.sha2_256) : message.sha2_256;
            return object;
        };

        /**
         * Converts this Digest to JSON.
         * @function toJSON
         * @memberof multiverse.Digest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Digest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Digest
         * @function getTypeUrl
         * @memberof multiverse.Digest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Digest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/multiverse.Digest";
        };

        return Digest;
    })();

    multiverse.TwitterAccount = (function() {

        /**
         * Properties of a TwitterAccount.
         * @memberof multiverse
         * @interface ITwitterAccount
         * @property {string|null} [handle] TwitterAccount handle
         */

        /**
         * Constructs a new TwitterAccount.
         * @memberof multiverse
         * @classdesc Represents a TwitterAccount.
         * @implements ITwitterAccount
         * @constructor
         * @param {multiverse.ITwitterAccount=} [properties] Properties to set
         */
        function TwitterAccount(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TwitterAccount handle.
         * @member {string} handle
         * @memberof multiverse.TwitterAccount
         * @instance
         */
        TwitterAccount.prototype.handle = "";

        /**
         * Creates a new TwitterAccount instance using the specified properties.
         * @function create
         * @memberof multiverse.TwitterAccount
         * @static
         * @param {multiverse.ITwitterAccount=} [properties] Properties to set
         * @returns {multiverse.TwitterAccount} TwitterAccount instance
         */
        TwitterAccount.create = function create(properties) {
            return new TwitterAccount(properties);
        };

        /**
         * Encodes the specified TwitterAccount message. Does not implicitly {@link multiverse.TwitterAccount.verify|verify} messages.
         * @function encode
         * @memberof multiverse.TwitterAccount
         * @static
         * @param {multiverse.ITwitterAccount} message TwitterAccount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TwitterAccount.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.handle != null && Object.hasOwnProperty.call(message, "handle"))
                writer.uint32(/* id 1126324, wireType 2 =*/9010594).string(message.handle);
            return writer;
        };

        /**
         * Encodes the specified TwitterAccount message, length delimited. Does not implicitly {@link multiverse.TwitterAccount.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multiverse.TwitterAccount
         * @static
         * @param {multiverse.ITwitterAccount} message TwitterAccount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TwitterAccount.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TwitterAccount message from the specified reader or buffer.
         * @function decode
         * @memberof multiverse.TwitterAccount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multiverse.TwitterAccount} TwitterAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TwitterAccount.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multiverse.TwitterAccount();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1126324: {
                        message.handle = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TwitterAccount message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multiverse.TwitterAccount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multiverse.TwitterAccount} TwitterAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TwitterAccount.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TwitterAccount message.
         * @function verify
         * @memberof multiverse.TwitterAccount
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TwitterAccount.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.handle != null && message.hasOwnProperty("handle"))
                if (!$util.isString(message.handle))
                    return "handle: string expected";
            return null;
        };

        /**
         * Creates a TwitterAccount message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multiverse.TwitterAccount
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multiverse.TwitterAccount} TwitterAccount
         */
        TwitterAccount.fromObject = function fromObject(object) {
            if (object instanceof $root.multiverse.TwitterAccount)
                return object;
            var message = new $root.multiverse.TwitterAccount();
            if (object.handle != null)
                message.handle = String(object.handle);
            return message;
        };

        /**
         * Creates a plain object from a TwitterAccount message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multiverse.TwitterAccount
         * @static
         * @param {multiverse.TwitterAccount} message TwitterAccount
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TwitterAccount.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.handle = "";
            if (message.handle != null && message.hasOwnProperty("handle"))
                object.handle = message.handle;
            return object;
        };

        /**
         * Converts this TwitterAccount to JSON.
         * @function toJSON
         * @memberof multiverse.TwitterAccount
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TwitterAccount.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TwitterAccount
         * @function getTypeUrl
         * @memberof multiverse.TwitterAccount
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TwitterAccount.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/multiverse.TwitterAccount";
        };

        return TwitterAccount;
    })();

    multiverse.TwitterPost = (function() {

        /**
         * Properties of a TwitterPost.
         * @memberof multiverse
         * @interface ITwitterPost
         * @property {multiverse.ITwitterAccount|null} [author] TwitterPost author
         * @property {string|null} [id] TwitterPost id
         */

        /**
         * Constructs a new TwitterPost.
         * @memberof multiverse
         * @classdesc Represents a TwitterPost.
         * @implements ITwitterPost
         * @constructor
         * @param {multiverse.ITwitterPost=} [properties] Properties to set
         */
        function TwitterPost(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TwitterPost author.
         * @member {multiverse.ITwitterAccount|null|undefined} author
         * @memberof multiverse.TwitterPost
         * @instance
         */
        TwitterPost.prototype.author = null;

        /**
         * TwitterPost id.
         * @member {string} id
         * @memberof multiverse.TwitterPost
         * @instance
         */
        TwitterPost.prototype.id = "";

        /**
         * Creates a new TwitterPost instance using the specified properties.
         * @function create
         * @memberof multiverse.TwitterPost
         * @static
         * @param {multiverse.ITwitterPost=} [properties] Properties to set
         * @returns {multiverse.TwitterPost} TwitterPost instance
         */
        TwitterPost.create = function create(properties) {
            return new TwitterPost(properties);
        };

        /**
         * Encodes the specified TwitterPost message. Does not implicitly {@link multiverse.TwitterPost.verify|verify} messages.
         * @function encode
         * @memberof multiverse.TwitterPost
         * @static
         * @param {multiverse.ITwitterPost} message TwitterPost message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TwitterPost.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1173336, wireType 2 =*/9386690).string(message.id);
            if (message.author != null && Object.hasOwnProperty.call(message, "author"))
                $root.multiverse.TwitterAccount.encode(message.author, writer.uint32(/* id 6716122, wireType 2 =*/53728978).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TwitterPost message, length delimited. Does not implicitly {@link multiverse.TwitterPost.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multiverse.TwitterPost
         * @static
         * @param {multiverse.ITwitterPost} message TwitterPost message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TwitterPost.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TwitterPost message from the specified reader or buffer.
         * @function decode
         * @memberof multiverse.TwitterPost
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multiverse.TwitterPost} TwitterPost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TwitterPost.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multiverse.TwitterPost();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 6716122: {
                        message.author = $root.multiverse.TwitterAccount.decode(reader, reader.uint32());
                        break;
                    }
                case 1173336: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TwitterPost message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multiverse.TwitterPost
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multiverse.TwitterPost} TwitterPost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TwitterPost.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TwitterPost message.
         * @function verify
         * @memberof multiverse.TwitterPost
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TwitterPost.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.author != null && message.hasOwnProperty("author")) {
                var error = $root.multiverse.TwitterAccount.verify(message.author);
                if (error)
                    return "author." + error;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a TwitterPost message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multiverse.TwitterPost
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multiverse.TwitterPost} TwitterPost
         */
        TwitterPost.fromObject = function fromObject(object) {
            if (object instanceof $root.multiverse.TwitterPost)
                return object;
            var message = new $root.multiverse.TwitterPost();
            if (object.author != null) {
                if (typeof object.author !== "object")
                    throw TypeError(".multiverse.TwitterPost.author: object expected");
                message.author = $root.multiverse.TwitterAccount.fromObject(object.author);
            }
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a TwitterPost message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multiverse.TwitterPost
         * @static
         * @param {multiverse.TwitterPost} message TwitterPost
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TwitterPost.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.author = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.author != null && message.hasOwnProperty("author"))
                object.author = $root.multiverse.TwitterAccount.toObject(message.author, options);
            return object;
        };

        /**
         * Converts this TwitterPost to JSON.
         * @function toJSON
         * @memberof multiverse.TwitterPost
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TwitterPost.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TwitterPost
         * @function getTypeUrl
         * @memberof multiverse.TwitterPost
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TwitterPost.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/multiverse.TwitterPost";
        };

        return TwitterPost;
    })();

    multiverse.MediumAccount = (function() {

        /**
         * Properties of a MediumAccount.
         * @memberof multiverse
         * @interface IMediumAccount
         * @property {string|null} [handle] MediumAccount handle
         */

        /**
         * Constructs a new MediumAccount.
         * @memberof multiverse
         * @classdesc Represents a MediumAccount.
         * @implements IMediumAccount
         * @constructor
         * @param {multiverse.IMediumAccount=} [properties] Properties to set
         */
        function MediumAccount(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MediumAccount handle.
         * @member {string} handle
         * @memberof multiverse.MediumAccount
         * @instance
         */
        MediumAccount.prototype.handle = "";

        /**
         * Creates a new MediumAccount instance using the specified properties.
         * @function create
         * @memberof multiverse.MediumAccount
         * @static
         * @param {multiverse.IMediumAccount=} [properties] Properties to set
         * @returns {multiverse.MediumAccount} MediumAccount instance
         */
        MediumAccount.create = function create(properties) {
            return new MediumAccount(properties);
        };

        /**
         * Encodes the specified MediumAccount message. Does not implicitly {@link multiverse.MediumAccount.verify|verify} messages.
         * @function encode
         * @memberof multiverse.MediumAccount
         * @static
         * @param {multiverse.IMediumAccount} message MediumAccount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MediumAccount.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.handle != null && Object.hasOwnProperty.call(message, "handle"))
                writer.uint32(/* id 2212215, wireType 2 =*/17697722).string(message.handle);
            return writer;
        };

        /**
         * Encodes the specified MediumAccount message, length delimited. Does not implicitly {@link multiverse.MediumAccount.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multiverse.MediumAccount
         * @static
         * @param {multiverse.IMediumAccount} message MediumAccount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MediumAccount.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MediumAccount message from the specified reader or buffer.
         * @function decode
         * @memberof multiverse.MediumAccount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multiverse.MediumAccount} MediumAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MediumAccount.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multiverse.MediumAccount();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2212215: {
                        message.handle = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MediumAccount message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multiverse.MediumAccount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multiverse.MediumAccount} MediumAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MediumAccount.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MediumAccount message.
         * @function verify
         * @memberof multiverse.MediumAccount
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MediumAccount.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.handle != null && message.hasOwnProperty("handle"))
                if (!$util.isString(message.handle))
                    return "handle: string expected";
            return null;
        };

        /**
         * Creates a MediumAccount message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multiverse.MediumAccount
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multiverse.MediumAccount} MediumAccount
         */
        MediumAccount.fromObject = function fromObject(object) {
            if (object instanceof $root.multiverse.MediumAccount)
                return object;
            var message = new $root.multiverse.MediumAccount();
            if (object.handle != null)
                message.handle = String(object.handle);
            return message;
        };

        /**
         * Creates a plain object from a MediumAccount message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multiverse.MediumAccount
         * @static
         * @param {multiverse.MediumAccount} message MediumAccount
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MediumAccount.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.handle = "";
            if (message.handle != null && message.hasOwnProperty("handle"))
                object.handle = message.handle;
            return object;
        };

        /**
         * Converts this MediumAccount to JSON.
         * @function toJSON
         * @memberof multiverse.MediumAccount
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MediumAccount.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MediumAccount
         * @function getTypeUrl
         * @memberof multiverse.MediumAccount
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MediumAccount.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/multiverse.MediumAccount";
        };

        return MediumAccount;
    })();

    multiverse.StockSymbol = (function() {

        /**
         * Properties of a StockSymbol.
         * @memberof multiverse
         * @interface IStockSymbol
         * @property {string|null} [symbol] StockSymbol symbol
         */

        /**
         * Constructs a new StockSymbol.
         * @memberof multiverse
         * @classdesc Represents a StockSymbol.
         * @implements IStockSymbol
         * @constructor
         * @param {multiverse.IStockSymbol=} [properties] Properties to set
         */
        function StockSymbol(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StockSymbol symbol.
         * @member {string} symbol
         * @memberof multiverse.StockSymbol
         * @instance
         */
        StockSymbol.prototype.symbol = "";

        /**
         * Creates a new StockSymbol instance using the specified properties.
         * @function create
         * @memberof multiverse.StockSymbol
         * @static
         * @param {multiverse.IStockSymbol=} [properties] Properties to set
         * @returns {multiverse.StockSymbol} StockSymbol instance
         */
        StockSymbol.create = function create(properties) {
            return new StockSymbol(properties);
        };

        /**
         * Encodes the specified StockSymbol message. Does not implicitly {@link multiverse.StockSymbol.verify|verify} messages.
         * @function encode
         * @memberof multiverse.StockSymbol
         * @static
         * @param {multiverse.IStockSymbol} message StockSymbol message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StockSymbol.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol"))
                writer.uint32(/* id 9912272, wireType 2 =*/79298178).string(message.symbol);
            return writer;
        };

        /**
         * Encodes the specified StockSymbol message, length delimited. Does not implicitly {@link multiverse.StockSymbol.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multiverse.StockSymbol
         * @static
         * @param {multiverse.IStockSymbol} message StockSymbol message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StockSymbol.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StockSymbol message from the specified reader or buffer.
         * @function decode
         * @memberof multiverse.StockSymbol
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multiverse.StockSymbol} StockSymbol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StockSymbol.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multiverse.StockSymbol();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 9912272: {
                        message.symbol = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StockSymbol message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multiverse.StockSymbol
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multiverse.StockSymbol} StockSymbol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StockSymbol.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StockSymbol message.
         * @function verify
         * @memberof multiverse.StockSymbol
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StockSymbol.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                if (!$util.isString(message.symbol))
                    return "symbol: string expected";
            return null;
        };

        /**
         * Creates a StockSymbol message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multiverse.StockSymbol
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multiverse.StockSymbol} StockSymbol
         */
        StockSymbol.fromObject = function fromObject(object) {
            if (object instanceof $root.multiverse.StockSymbol)
                return object;
            var message = new $root.multiverse.StockSymbol();
            if (object.symbol != null)
                message.symbol = String(object.symbol);
            return message;
        };

        /**
         * Creates a plain object from a StockSymbol message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multiverse.StockSymbol
         * @static
         * @param {multiverse.StockSymbol} message StockSymbol
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StockSymbol.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.symbol = "";
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                object.symbol = message.symbol;
            return object;
        };

        /**
         * Converts this StockSymbol to JSON.
         * @function toJSON
         * @memberof multiverse.StockSymbol
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StockSymbol.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StockSymbol
         * @function getTypeUrl
         * @memberof multiverse.StockSymbol
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StockSymbol.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/multiverse.StockSymbol";
        };

        return StockSymbol;
    })();

    return multiverse;
})();

module.exports = $root;
