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
                writer.uint32(/* id 2128273, wireType 2 =*/17026186).string(message.uuid);
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
                case 2128273: {
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

    multiverse.Universe = (function() {

        /**
         * Properties of an Universe.
         * @memberof multiverse
         * @interface IUniverse
         * @property {Array.<multiverse.IRating>|null} [ratings] Universe ratings
         * @property {Array.<multiverse.IArticle>|null} [articles] Universe articles
         * @property {Array.<multiverse.IPublishedItem>|null} [publishedItems] Universe publishedItems
         * @property {multiverse.IArticle|null} [singleArticle] Universe singleArticle
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
            this.ratings = [];
            this.articles = [];
            this.publishedItems = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Universe ratings.
         * @member {Array.<multiverse.IRating>} ratings
         * @memberof multiverse.Universe
         * @instance
         */
        Universe.prototype.ratings = $util.emptyArray;

        /**
         * Universe articles.
         * @member {Array.<multiverse.IArticle>} articles
         * @memberof multiverse.Universe
         * @instance
         */
        Universe.prototype.articles = $util.emptyArray;

        /**
         * Universe publishedItems.
         * @member {Array.<multiverse.IPublishedItem>} publishedItems
         * @memberof multiverse.Universe
         * @instance
         */
        Universe.prototype.publishedItems = $util.emptyArray;

        /**
         * Universe singleArticle.
         * @member {multiverse.IArticle|null|undefined} singleArticle
         * @memberof multiverse.Universe
         * @instance
         */
        Universe.prototype.singleArticle = null;

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
            if (message.ratings != null && message.ratings.length)
                for (var i = 0; i < message.ratings.length; ++i)
                    $root.multiverse.Rating.encode(message.ratings[i], writer.uint32(/* id 521667, wireType 2 =*/4173338).fork()).ldelim();
            if (message.publishedItems != null && message.publishedItems.length)
                for (var i = 0; i < message.publishedItems.length; ++i)
                    $root.multiverse.PublishedItem.encode(message.publishedItems[i], writer.uint32(/* id 625362, wireType 2 =*/5002898).fork()).ldelim();
            if (message.singleArticle != null && Object.hasOwnProperty.call(message, "singleArticle"))
                $root.multiverse.Article.encode(message.singleArticle, writer.uint32(/* id 721873, wireType 2 =*/5774986).fork()).ldelim();
            if (message.articles != null && message.articles.length)
                for (var i = 0; i < message.articles.length; ++i)
                    $root.multiverse.Article.encode(message.articles[i], writer.uint32(/* id 1278123, wireType 2 =*/10224986).fork()).ldelim();
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
                case 521667: {
                        if (!(message.ratings && message.ratings.length))
                            message.ratings = [];
                        message.ratings.push($root.multiverse.Rating.decode(reader, reader.uint32()));
                        break;
                    }
                case 1278123: {
                        if (!(message.articles && message.articles.length))
                            message.articles = [];
                        message.articles.push($root.multiverse.Article.decode(reader, reader.uint32()));
                        break;
                    }
                case 625362: {
                        if (!(message.publishedItems && message.publishedItems.length))
                            message.publishedItems = [];
                        message.publishedItems.push($root.multiverse.PublishedItem.decode(reader, reader.uint32()));
                        break;
                    }
                case 721873: {
                        message.singleArticle = $root.multiverse.Article.decode(reader, reader.uint32());
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
            if (message.ratings != null && message.hasOwnProperty("ratings")) {
                if (!Array.isArray(message.ratings))
                    return "ratings: array expected";
                for (var i = 0; i < message.ratings.length; ++i) {
                    var error = $root.multiverse.Rating.verify(message.ratings[i]);
                    if (error)
                        return "ratings." + error;
                }
            }
            if (message.articles != null && message.hasOwnProperty("articles")) {
                if (!Array.isArray(message.articles))
                    return "articles: array expected";
                for (var i = 0; i < message.articles.length; ++i) {
                    var error = $root.multiverse.Article.verify(message.articles[i]);
                    if (error)
                        return "articles." + error;
                }
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
            if (message.singleArticle != null && message.hasOwnProperty("singleArticle")) {
                var error = $root.multiverse.Article.verify(message.singleArticle);
                if (error)
                    return "singleArticle." + error;
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
            if (object.ratings) {
                if (!Array.isArray(object.ratings))
                    throw TypeError(".multiverse.Universe.ratings: array expected");
                message.ratings = [];
                for (var i = 0; i < object.ratings.length; ++i) {
                    if (typeof object.ratings[i] !== "object")
                        throw TypeError(".multiverse.Universe.ratings: object expected");
                    message.ratings[i] = $root.multiverse.Rating.fromObject(object.ratings[i]);
                }
            }
            if (object.articles) {
                if (!Array.isArray(object.articles))
                    throw TypeError(".multiverse.Universe.articles: array expected");
                message.articles = [];
                for (var i = 0; i < object.articles.length; ++i) {
                    if (typeof object.articles[i] !== "object")
                        throw TypeError(".multiverse.Universe.articles: object expected");
                    message.articles[i] = $root.multiverse.Article.fromObject(object.articles[i]);
                }
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
            if (object.singleArticle != null) {
                if (typeof object.singleArticle !== "object")
                    throw TypeError(".multiverse.Universe.singleArticle: object expected");
                message.singleArticle = $root.multiverse.Article.fromObject(object.singleArticle);
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
            if (options.arrays || options.defaults) {
                object.ratings = [];
                object.publishedItems = [];
                object.articles = [];
            }
            if (options.defaults)
                object.singleArticle = null;
            if (message.ratings && message.ratings.length) {
                object.ratings = [];
                for (var j = 0; j < message.ratings.length; ++j)
                    object.ratings[j] = $root.multiverse.Rating.toObject(message.ratings[j], options);
            }
            if (message.publishedItems && message.publishedItems.length) {
                object.publishedItems = [];
                for (var j = 0; j < message.publishedItems.length; ++j)
                    object.publishedItems[j] = $root.multiverse.PublishedItem.toObject(message.publishedItems[j], options);
            }
            if (message.singleArticle != null && message.hasOwnProperty("singleArticle"))
                object.singleArticle = $root.multiverse.Article.toObject(message.singleArticle, options);
            if (message.articles && message.articles.length) {
                object.articles = [];
                for (var j = 0; j < message.articles.length; ++j)
                    object.articles[j] = $root.multiverse.Article.toObject(message.articles[j], options);
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
                    writer.uint32(/* id 218731, wireType 2 =*/1749850).string(message.test[i]);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 2138293, wireType 2 =*/17106346).string(message.title);
            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                writer.uint32(/* id 4723948, wireType 2 =*/37791586).string(message.body);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.multiverse.DateTime.encode(message.createdAt, writer.uint32(/* id 8742394, wireType 2 =*/69939154).fork()).ldelim();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 9282123, wireType 2 =*/74256986).string(message.uuid);
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
                case 9282123: {
                        message.uuid = reader.string();
                        break;
                    }
                case 2138293: {
                        message.title = reader.string();
                        break;
                    }
                case 4723948: {
                        message.body = reader.string();
                        break;
                    }
                case 8742394: {
                        message.createdAt = $root.multiverse.DateTime.decode(reader, reader.uint32());
                        break;
                    }
                case 218731: {
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
                object.body = "";
                object.createdAt = null;
                object.uuid = "";
            }
            if (message.test && message.test.length) {
                object.test = [];
                for (var j = 0; j < message.test.length; ++j)
                    object.test[j] = message.test[j];
            }
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = message.body;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.multiverse.DateTime.toObject(message.createdAt, options);
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
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

    multiverse.LinkRating = (function() {

        /**
         * Properties of a LinkRating.
         * @memberof multiverse
         * @interface ILinkRating
         * @property {multiverse.ILink|null} [link] LinkRating link
         * @property {multiverse.IRating|null} [rating] LinkRating rating
         */

        /**
         * Constructs a new LinkRating.
         * @memberof multiverse
         * @classdesc Represents a LinkRating.
         * @implements ILinkRating
         * @constructor
         * @param {multiverse.ILinkRating=} [properties] Properties to set
         */
        function LinkRating(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LinkRating link.
         * @member {multiverse.ILink|null|undefined} link
         * @memberof multiverse.LinkRating
         * @instance
         */
        LinkRating.prototype.link = null;

        /**
         * LinkRating rating.
         * @member {multiverse.IRating|null|undefined} rating
         * @memberof multiverse.LinkRating
         * @instance
         */
        LinkRating.prototype.rating = null;

        /**
         * Creates a new LinkRating instance using the specified properties.
         * @function create
         * @memberof multiverse.LinkRating
         * @static
         * @param {multiverse.ILinkRating=} [properties] Properties to set
         * @returns {multiverse.LinkRating} LinkRating instance
         */
        LinkRating.create = function create(properties) {
            return new LinkRating(properties);
        };

        /**
         * Encodes the specified LinkRating message. Does not implicitly {@link multiverse.LinkRating.verify|verify} messages.
         * @function encode
         * @memberof multiverse.LinkRating
         * @static
         * @param {multiverse.ILinkRating} message LinkRating message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LinkRating.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rating != null && Object.hasOwnProperty.call(message, "rating"))
                $root.multiverse.Rating.encode(message.rating, writer.uint32(/* id 126273, wireType 2 =*/1010186).fork()).ldelim();
            if (message.link != null && Object.hasOwnProperty.call(message, "link"))
                $root.multiverse.Link.encode(message.link, writer.uint32(/* id 949667, wireType 2 =*/7597338).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LinkRating message, length delimited. Does not implicitly {@link multiverse.LinkRating.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multiverse.LinkRating
         * @static
         * @param {multiverse.ILinkRating} message LinkRating message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LinkRating.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LinkRating message from the specified reader or buffer.
         * @function decode
         * @memberof multiverse.LinkRating
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multiverse.LinkRating} LinkRating
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LinkRating.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multiverse.LinkRating();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 949667: {
                        message.link = $root.multiverse.Link.decode(reader, reader.uint32());
                        break;
                    }
                case 126273: {
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
         * Decodes a LinkRating message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multiverse.LinkRating
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multiverse.LinkRating} LinkRating
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LinkRating.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LinkRating message.
         * @function verify
         * @memberof multiverse.LinkRating
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LinkRating.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.link != null && message.hasOwnProperty("link")) {
                var error = $root.multiverse.Link.verify(message.link);
                if (error)
                    return "link." + error;
            }
            if (message.rating != null && message.hasOwnProperty("rating")) {
                var error = $root.multiverse.Rating.verify(message.rating);
                if (error)
                    return "rating." + error;
            }
            return null;
        };

        /**
         * Creates a LinkRating message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multiverse.LinkRating
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multiverse.LinkRating} LinkRating
         */
        LinkRating.fromObject = function fromObject(object) {
            if (object instanceof $root.multiverse.LinkRating)
                return object;
            var message = new $root.multiverse.LinkRating();
            if (object.link != null) {
                if (typeof object.link !== "object")
                    throw TypeError(".multiverse.LinkRating.link: object expected");
                message.link = $root.multiverse.Link.fromObject(object.link);
            }
            if (object.rating != null) {
                if (typeof object.rating !== "object")
                    throw TypeError(".multiverse.LinkRating.rating: object expected");
                message.rating = $root.multiverse.Rating.fromObject(object.rating);
            }
            return message;
        };

        /**
         * Creates a plain object from a LinkRating message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multiverse.LinkRating
         * @static
         * @param {multiverse.LinkRating} message LinkRating
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LinkRating.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.rating = null;
                object.link = null;
            }
            if (message.rating != null && message.hasOwnProperty("rating"))
                object.rating = $root.multiverse.Rating.toObject(message.rating, options);
            if (message.link != null && message.hasOwnProperty("link"))
                object.link = $root.multiverse.Link.toObject(message.link, options);
            return object;
        };

        /**
         * Converts this LinkRating to JSON.
         * @function toJSON
         * @memberof multiverse.LinkRating
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LinkRating.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LinkRating
         * @function getTypeUrl
         * @memberof multiverse.LinkRating
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LinkRating.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/multiverse.LinkRating";
        };

        return LinkRating;
    })();

    multiverse.Link = (function() {

        /**
         * Properties of a Link.
         * @memberof multiverse
         * @interface ILink
         * @property {string|null} [url] Link url
         */

        /**
         * Constructs a new Link.
         * @memberof multiverse
         * @classdesc Represents a Link.
         * @implements ILink
         * @constructor
         * @param {multiverse.ILink=} [properties] Properties to set
         */
        function Link(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Link url.
         * @member {string} url
         * @memberof multiverse.Link
         * @instance
         */
        Link.prototype.url = "";

        /**
         * Creates a new Link instance using the specified properties.
         * @function create
         * @memberof multiverse.Link
         * @static
         * @param {multiverse.ILink=} [properties] Properties to set
         * @returns {multiverse.Link} Link instance
         */
        Link.create = function create(properties) {
            return new Link(properties);
        };

        /**
         * Encodes the specified Link message. Does not implicitly {@link multiverse.Link.verify|verify} messages.
         * @function encode
         * @memberof multiverse.Link
         * @static
         * @param {multiverse.ILink} message Link message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Link.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 956450, wireType 2 =*/7651602).string(message.url);
            return writer;
        };

        /**
         * Encodes the specified Link message, length delimited. Does not implicitly {@link multiverse.Link.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multiverse.Link
         * @static
         * @param {multiverse.ILink} message Link message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Link.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Link message from the specified reader or buffer.
         * @function decode
         * @memberof multiverse.Link
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multiverse.Link} Link
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Link.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multiverse.Link();
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
         * Decodes a Link message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multiverse.Link
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multiverse.Link} Link
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Link.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Link message.
         * @function verify
         * @memberof multiverse.Link
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Link.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };

        /**
         * Creates a Link message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multiverse.Link
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multiverse.Link} Link
         */
        Link.fromObject = function fromObject(object) {
            if (object instanceof $root.multiverse.Link)
                return object;
            var message = new $root.multiverse.Link();
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };

        /**
         * Creates a plain object from a Link message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multiverse.Link
         * @static
         * @param {multiverse.Link} message Link
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Link.toObject = function toObject(message, options) {
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
         * Converts this Link to JSON.
         * @function toJSON
         * @memberof multiverse.Link
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Link.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Link
         * @function getTypeUrl
         * @memberof multiverse.Link
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Link.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/multiverse.Link";
        };

        return Link;
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
         * @property {multiverse.ILink|null} [link] Rating link
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
         * Rating link.
         * @member {multiverse.ILink|null|undefined} link
         * @memberof multiverse.Rating
         * @instance
         */
        Rating.prototype.link = null;

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
         * @member {"movie"|"link"|"amazonProduct"|"githubAccount"|"githubRepo"|"youtubeVideo"|undefined} subject
         * @memberof multiverse.Rating
         * @instance
         */
        Object.defineProperty(Rating.prototype, "subject", {
            get: $util.oneOfGetter($oneOfFields = ["movie", "link", "amazonProduct", "githubAccount", "githubRepo", "youtubeVideo"]),
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
            if (message.amazonProduct != null && Object.hasOwnProperty.call(message, "amazonProduct"))
                $root.multiverse.AmazonProduct.encode(message.amazonProduct, writer.uint32(/* id 387423, wireType 2 =*/3099386).fork()).ldelim();
            if (message.movie != null && Object.hasOwnProperty.call(message, "movie"))
                $root.multiverse.Movie.encode(message.movie, writer.uint32(/* id 7244351, wireType 2 =*/57954810).fork()).ldelim();
            if (message.githubAccount != null && Object.hasOwnProperty.call(message, "githubAccount"))
                $root.multiverse.GitHubAccount.encode(message.githubAccount, writer.uint32(/* id 9384723, wireType 2 =*/75077786).fork()).ldelim();
            if (message.link != null && Object.hasOwnProperty.call(message, "link"))
                $root.multiverse.Link.encode(message.link, writer.uint32(/* id 32847932, wireType 2 =*/262783458).fork()).ldelim();
            if (message.githubRepo != null && Object.hasOwnProperty.call(message, "githubRepo"))
                $root.multiverse.GitHubRepo.encode(message.githubRepo, writer.uint32(/* id 91890915, wireType 2 =*/735127322).fork()).ldelim();
            if (message.starRating != null && Object.hasOwnProperty.call(message, "starRating"))
                writer.uint32(/* id 412650755, wireType 0 =*/3301206040).int32(message.starRating);
            if (message.youtubeVideo != null && Object.hasOwnProperty.call(message, "youtubeVideo"))
                $root.multiverse.YouTubeVideo.encode(message.youtubeVideo, writer.uint32(/* id 445860325, wireType 2 =*/3566882602).fork()).ldelim();
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
                case 7244351: {
                        message.movie = $root.multiverse.Movie.decode(reader, reader.uint32());
                        break;
                    }
                case 32847932: {
                        message.link = $root.multiverse.Link.decode(reader, reader.uint32());
                        break;
                    }
                case 387423: {
                        message.amazonProduct = $root.multiverse.AmazonProduct.decode(reader, reader.uint32());
                        break;
                    }
                case 9384723: {
                        message.githubAccount = $root.multiverse.GitHubAccount.decode(reader, reader.uint32());
                        break;
                    }
                case 628761827: {
                        message.githubRepo = $root.multiverse.GitHubRepo.decode(reader, reader.uint32());
                        break;
                    }
                case 982731237: {
                        message.youtubeVideo = $root.multiverse.YouTubeVideo.decode(reader, reader.uint32());
                        break;
                    }
                case 949521667: {
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
            if (message.link != null && message.hasOwnProperty("link")) {
                if (properties.subject === 1)
                    return "subject: multiple values";
                properties.subject = 1;
                {
                    var error = $root.multiverse.Link.verify(message.link);
                    if (error)
                        return "link." + error;
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
            if (object.link != null) {
                if (typeof object.link !== "object")
                    throw TypeError(".multiverse.Rating.link: object expected");
                message.link = $root.multiverse.Link.fromObject(object.link);
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
            if (message.amazonProduct != null && message.hasOwnProperty("amazonProduct")) {
                object.amazonProduct = $root.multiverse.AmazonProduct.toObject(message.amazonProduct, options);
                if (options.oneofs)
                    object.subject = "amazonProduct";
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
            if (message.link != null && message.hasOwnProperty("link")) {
                object.link = $root.multiverse.Link.toObject(message.link, options);
                if (options.oneofs)
                    object.subject = "link";
            }
            if (message.githubRepo != null && message.hasOwnProperty("githubRepo")) {
                object.githubRepo = $root.multiverse.GitHubRepo.toObject(message.githubRepo, options);
                if (options.oneofs)
                    object.subject = "githubRepo";
            }
            if (message.starRating != null && message.hasOwnProperty("starRating"))
                object.starRating = options.enums === String ? $root.multiverse.StarRating[message.starRating] === undefined ? message.starRating : $root.multiverse.StarRating[message.starRating] : message.starRating;
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
                writer.uint32(/* id 412650755, wireType 2 =*/3301206042).string(message.asin);
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
                case 949521667: {
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
                writer.uint32(/* id 412650755, wireType 2 =*/3301206042).string(message.imdbId);
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
                case 949521667: {
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
                writer.uint32(/* id 23789723, wireType 2 =*/190317786).string(message.name);
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
                case 23789723: {
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
                $root.multiverse.GitHubAccount.encode(message.owner, writer.uint32(/* id 23789723, wireType 2 =*/190317786).fork()).ldelim();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 384378293, wireType 2 =*/3075026346).string(message.name);
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
                case 23789723: {
                        message.owner = $root.multiverse.GitHubAccount.decode(reader, reader.uint32());
                        break;
                    }
                case 384378293: {
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

    return multiverse;
})();

module.exports = $root;
