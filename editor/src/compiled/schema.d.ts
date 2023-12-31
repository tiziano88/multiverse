import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace multiverse. */
export namespace multiverse {

    /** Properties of a PublishedItem. */
    interface IPublishedItem {

        /** PublishedItem uuid */
        uuid?: (string|null);

        /** PublishedItem article */
        article?: (multiverse.IArticle|null);

        /** PublishedItem youtubeVideo */
        youtubeVideo?: (multiverse.IYouTubeVideo|null);

        /** PublishedItem rating */
        rating?: (multiverse.IRating|null);
    }

    /** Represents a PublishedItem. */
    class PublishedItem implements IPublishedItem {

        /**
         * Constructs a new PublishedItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: multiverse.IPublishedItem);

        /** PublishedItem uuid. */
        public uuid: string;

        /** PublishedItem article. */
        public article?: (multiverse.IArticle|null);

        /** PublishedItem youtubeVideo. */
        public youtubeVideo?: (multiverse.IYouTubeVideo|null);

        /** PublishedItem rating. */
        public rating?: (multiverse.IRating|null);

        /** PublishedItem item. */
        public item?: ("article"|"youtubeVideo"|"rating");

        /**
         * Creates a new PublishedItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublishedItem instance
         */
        public static create(properties?: multiverse.IPublishedItem): multiverse.PublishedItem;

        /**
         * Encodes the specified PublishedItem message. Does not implicitly {@link multiverse.PublishedItem.verify|verify} messages.
         * @param message PublishedItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: multiverse.IPublishedItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublishedItem message, length delimited. Does not implicitly {@link multiverse.PublishedItem.verify|verify} messages.
         * @param message PublishedItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: multiverse.IPublishedItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublishedItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublishedItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): multiverse.PublishedItem;

        /**
         * Decodes a PublishedItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublishedItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): multiverse.PublishedItem;

        /**
         * Verifies a PublishedItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PublishedItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublishedItem
         */
        public static fromObject(object: { [k: string]: any }): multiverse.PublishedItem;

        /**
         * Creates a plain object from a PublishedItem message. Also converts values to other types if specified.
         * @param message PublishedItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: multiverse.PublishedItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublishedItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PublishedItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Universe. */
    interface IUniverse {

        /** Universe ratings */
        ratings?: (multiverse.IRating[]|null);

        /** Universe articles */
        articles?: (multiverse.IArticle[]|null);

        /** Universe publishedItems */
        publishedItems?: (multiverse.IPublishedItem[]|null);
    }

    /** Represents an Universe. */
    class Universe implements IUniverse {

        /**
         * Constructs a new Universe.
         * @param [properties] Properties to set
         */
        constructor(properties?: multiverse.IUniverse);

        /** Universe ratings. */
        public ratings: multiverse.IRating[];

        /** Universe articles. */
        public articles: multiverse.IArticle[];

        /** Universe publishedItems. */
        public publishedItems: multiverse.IPublishedItem[];

        /**
         * Creates a new Universe instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Universe instance
         */
        public static create(properties?: multiverse.IUniverse): multiverse.Universe;

        /**
         * Encodes the specified Universe message. Does not implicitly {@link multiverse.Universe.verify|verify} messages.
         * @param message Universe message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: multiverse.IUniverse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Universe message, length delimited. Does not implicitly {@link multiverse.Universe.verify|verify} messages.
         * @param message Universe message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: multiverse.IUniverse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Universe message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Universe
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): multiverse.Universe;

        /**
         * Decodes an Universe message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Universe
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): multiverse.Universe;

        /**
         * Verifies an Universe message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Universe message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Universe
         */
        public static fromObject(object: { [k: string]: any }): multiverse.Universe;

        /**
         * Creates a plain object from an Universe message. Also converts values to other types if specified.
         * @param message Universe
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: multiverse.Universe, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Universe to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Universe
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Article. */
    interface IArticle {

        /** Article uuid */
        uuid?: (string|null);

        /** Article title */
        title?: (string|null);

        /** Article body */
        body?: (string|null);

        /** Article createdAt */
        createdAt?: (multiverse.IDateTime|null);
    }

    /** Represents an Article. */
    class Article implements IArticle {

        /**
         * Constructs a new Article.
         * @param [properties] Properties to set
         */
        constructor(properties?: multiverse.IArticle);

        /** Article uuid. */
        public uuid: string;

        /** Article title. */
        public title: string;

        /** Article body. */
        public body: string;

        /** Article createdAt. */
        public createdAt?: (multiverse.IDateTime|null);

        /**
         * Creates a new Article instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Article instance
         */
        public static create(properties?: multiverse.IArticle): multiverse.Article;

        /**
         * Encodes the specified Article message. Does not implicitly {@link multiverse.Article.verify|verify} messages.
         * @param message Article message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: multiverse.IArticle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Article message, length delimited. Does not implicitly {@link multiverse.Article.verify|verify} messages.
         * @param message Article message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: multiverse.IArticle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Article message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Article
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): multiverse.Article;

        /**
         * Decodes an Article message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Article
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): multiverse.Article;

        /**
         * Verifies an Article message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Article message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Article
         */
        public static fromObject(object: { [k: string]: any }): multiverse.Article;

        /**
         * Creates a plain object from an Article message. Also converts values to other types if specified.
         * @param message Article
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: multiverse.Article, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Article to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Article
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a YouTubeVideo. */
    interface IYouTubeVideo {

        /** YouTubeVideo videoId */
        videoId?: (string|null);
    }

    /** Represents a YouTubeVideo. */
    class YouTubeVideo implements IYouTubeVideo {

        /**
         * Constructs a new YouTubeVideo.
         * @param [properties] Properties to set
         */
        constructor(properties?: multiverse.IYouTubeVideo);

        /** YouTubeVideo videoId. */
        public videoId: string;

        /**
         * Creates a new YouTubeVideo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns YouTubeVideo instance
         */
        public static create(properties?: multiverse.IYouTubeVideo): multiverse.YouTubeVideo;

        /**
         * Encodes the specified YouTubeVideo message. Does not implicitly {@link multiverse.YouTubeVideo.verify|verify} messages.
         * @param message YouTubeVideo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: multiverse.IYouTubeVideo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified YouTubeVideo message, length delimited. Does not implicitly {@link multiverse.YouTubeVideo.verify|verify} messages.
         * @param message YouTubeVideo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: multiverse.IYouTubeVideo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a YouTubeVideo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns YouTubeVideo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): multiverse.YouTubeVideo;

        /**
         * Decodes a YouTubeVideo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns YouTubeVideo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): multiverse.YouTubeVideo;

        /**
         * Verifies a YouTubeVideo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a YouTubeVideo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns YouTubeVideo
         */
        public static fromObject(object: { [k: string]: any }): multiverse.YouTubeVideo;

        /**
         * Creates a plain object from a YouTubeVideo message. Also converts values to other types if specified.
         * @param message YouTubeVideo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: multiverse.YouTubeVideo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this YouTubeVideo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for YouTubeVideo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DateTime. */
    interface IDateTime {

        /** DateTime unixTimestamp */
        unixTimestamp?: (number|Long|null);
    }

    /** Represents a DateTime. */
    class DateTime implements IDateTime {

        /**
         * Constructs a new DateTime.
         * @param [properties] Properties to set
         */
        constructor(properties?: multiverse.IDateTime);

        /** DateTime unixTimestamp. */
        public unixTimestamp: (number|Long);

        /**
         * Creates a new DateTime instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DateTime instance
         */
        public static create(properties?: multiverse.IDateTime): multiverse.DateTime;

        /**
         * Encodes the specified DateTime message. Does not implicitly {@link multiverse.DateTime.verify|verify} messages.
         * @param message DateTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: multiverse.IDateTime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DateTime message, length delimited. Does not implicitly {@link multiverse.DateTime.verify|verify} messages.
         * @param message DateTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: multiverse.IDateTime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DateTime message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DateTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): multiverse.DateTime;

        /**
         * Decodes a DateTime message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DateTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): multiverse.DateTime;

        /**
         * Verifies a DateTime message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DateTime message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DateTime
         */
        public static fromObject(object: { [k: string]: any }): multiverse.DateTime;

        /**
         * Creates a plain object from a DateTime message. Also converts values to other types if specified.
         * @param message DateTime
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: multiverse.DateTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DateTime to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DateTime
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LinkRating. */
    interface ILinkRating {

        /** LinkRating link */
        link?: (multiverse.ILink|null);

        /** LinkRating rating */
        rating?: (multiverse.IRating|null);
    }

    /** Represents a LinkRating. */
    class LinkRating implements ILinkRating {

        /**
         * Constructs a new LinkRating.
         * @param [properties] Properties to set
         */
        constructor(properties?: multiverse.ILinkRating);

        /** LinkRating link. */
        public link?: (multiverse.ILink|null);

        /** LinkRating rating. */
        public rating?: (multiverse.IRating|null);

        /**
         * Creates a new LinkRating instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LinkRating instance
         */
        public static create(properties?: multiverse.ILinkRating): multiverse.LinkRating;

        /**
         * Encodes the specified LinkRating message. Does not implicitly {@link multiverse.LinkRating.verify|verify} messages.
         * @param message LinkRating message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: multiverse.ILinkRating, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LinkRating message, length delimited. Does not implicitly {@link multiverse.LinkRating.verify|verify} messages.
         * @param message LinkRating message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: multiverse.ILinkRating, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LinkRating message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LinkRating
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): multiverse.LinkRating;

        /**
         * Decodes a LinkRating message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LinkRating
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): multiverse.LinkRating;

        /**
         * Verifies a LinkRating message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LinkRating message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LinkRating
         */
        public static fromObject(object: { [k: string]: any }): multiverse.LinkRating;

        /**
         * Creates a plain object from a LinkRating message. Also converts values to other types if specified.
         * @param message LinkRating
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: multiverse.LinkRating, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LinkRating to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LinkRating
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Link. */
    interface ILink {

        /** Link url */
        url?: (string|null);
    }

    /** Represents a Link. */
    class Link implements ILink {

        /**
         * Constructs a new Link.
         * @param [properties] Properties to set
         */
        constructor(properties?: multiverse.ILink);

        /** Link url. */
        public url: string;

        /**
         * Creates a new Link instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Link instance
         */
        public static create(properties?: multiverse.ILink): multiverse.Link;

        /**
         * Encodes the specified Link message. Does not implicitly {@link multiverse.Link.verify|verify} messages.
         * @param message Link message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: multiverse.ILink, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Link message, length delimited. Does not implicitly {@link multiverse.Link.verify|verify} messages.
         * @param message Link message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: multiverse.ILink, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Link message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Link
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): multiverse.Link;

        /**
         * Decodes a Link message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Link
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): multiverse.Link;

        /**
         * Verifies a Link message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Link message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Link
         */
        public static fromObject(object: { [k: string]: any }): multiverse.Link;

        /**
         * Creates a plain object from a Link message. Also converts values to other types if specified.
         * @param message Link
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: multiverse.Link, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Link to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Link
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** StarRating enum. */
    enum StarRating {
        UNKNOWN = 0,
        ONE_STAR = 1,
        TWO_STARS = 2,
        THREE_STARS = 3,
        FOUR_STARS = 4,
        FIVE_STARS = 5
    }

    /** Properties of a Rating. */
    interface IRating {

        /** Rating movie */
        movie?: (multiverse.IMovie|null);

        /** Rating link */
        link?: (multiverse.ILink|null);

        /** Rating amazonProduct */
        amazonProduct?: (multiverse.IAmazonProduct|null);

        /** Rating githubAccount */
        githubAccount?: (multiverse.IGitHubAccount|null);

        /** Rating githubRepo */
        githubRepo?: (multiverse.IGitHubRepo|null);

        /** Rating youtubeVideo */
        youtubeVideo?: (multiverse.IYouTubeVideo|null);

        /** Rating starRating */
        starRating?: (multiverse.StarRating|null);
    }

    /** Represents a Rating. */
    class Rating implements IRating {

        /**
         * Constructs a new Rating.
         * @param [properties] Properties to set
         */
        constructor(properties?: multiverse.IRating);

        /** Rating movie. */
        public movie?: (multiverse.IMovie|null);

        /** Rating link. */
        public link?: (multiverse.ILink|null);

        /** Rating amazonProduct. */
        public amazonProduct?: (multiverse.IAmazonProduct|null);

        /** Rating githubAccount. */
        public githubAccount?: (multiverse.IGitHubAccount|null);

        /** Rating githubRepo. */
        public githubRepo?: (multiverse.IGitHubRepo|null);

        /** Rating youtubeVideo. */
        public youtubeVideo?: (multiverse.IYouTubeVideo|null);

        /** Rating starRating. */
        public starRating: multiverse.StarRating;

        /** Rating subject. */
        public subject?: ("movie"|"link"|"amazonProduct"|"githubAccount"|"githubRepo"|"youtubeVideo");

        /**
         * Creates a new Rating instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Rating instance
         */
        public static create(properties?: multiverse.IRating): multiverse.Rating;

        /**
         * Encodes the specified Rating message. Does not implicitly {@link multiverse.Rating.verify|verify} messages.
         * @param message Rating message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: multiverse.IRating, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Rating message, length delimited. Does not implicitly {@link multiverse.Rating.verify|verify} messages.
         * @param message Rating message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: multiverse.IRating, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Rating message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Rating
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): multiverse.Rating;

        /**
         * Decodes a Rating message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Rating
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): multiverse.Rating;

        /**
         * Verifies a Rating message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Rating message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Rating
         */
        public static fromObject(object: { [k: string]: any }): multiverse.Rating;

        /**
         * Creates a plain object from a Rating message. Also converts values to other types if specified.
         * @param message Rating
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: multiverse.Rating, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Rating to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Rating
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AmazonProduct. */
    interface IAmazonProduct {

        /** AmazonProduct asin */
        asin?: (string|null);
    }

    /** Represents an AmazonProduct. */
    class AmazonProduct implements IAmazonProduct {

        /**
         * Constructs a new AmazonProduct.
         * @param [properties] Properties to set
         */
        constructor(properties?: multiverse.IAmazonProduct);

        /** AmazonProduct asin. */
        public asin: string;

        /**
         * Creates a new AmazonProduct instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AmazonProduct instance
         */
        public static create(properties?: multiverse.IAmazonProduct): multiverse.AmazonProduct;

        /**
         * Encodes the specified AmazonProduct message. Does not implicitly {@link multiverse.AmazonProduct.verify|verify} messages.
         * @param message AmazonProduct message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: multiverse.IAmazonProduct, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AmazonProduct message, length delimited. Does not implicitly {@link multiverse.AmazonProduct.verify|verify} messages.
         * @param message AmazonProduct message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: multiverse.IAmazonProduct, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AmazonProduct message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AmazonProduct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): multiverse.AmazonProduct;

        /**
         * Decodes an AmazonProduct message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AmazonProduct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): multiverse.AmazonProduct;

        /**
         * Verifies an AmazonProduct message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AmazonProduct message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AmazonProduct
         */
        public static fromObject(object: { [k: string]: any }): multiverse.AmazonProduct;

        /**
         * Creates a plain object from an AmazonProduct message. Also converts values to other types if specified.
         * @param message AmazonProduct
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: multiverse.AmazonProduct, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AmazonProduct to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AmazonProduct
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Movie. */
    interface IMovie {

        /** Movie imdbId */
        imdbId?: (string|null);
    }

    /** Represents a Movie. */
    class Movie implements IMovie {

        /**
         * Constructs a new Movie.
         * @param [properties] Properties to set
         */
        constructor(properties?: multiverse.IMovie);

        /** Movie imdbId. */
        public imdbId: string;

        /**
         * Creates a new Movie instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Movie instance
         */
        public static create(properties?: multiverse.IMovie): multiverse.Movie;

        /**
         * Encodes the specified Movie message. Does not implicitly {@link multiverse.Movie.verify|verify} messages.
         * @param message Movie message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: multiverse.IMovie, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Movie message, length delimited. Does not implicitly {@link multiverse.Movie.verify|verify} messages.
         * @param message Movie message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: multiverse.IMovie, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Movie message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Movie
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): multiverse.Movie;

        /**
         * Decodes a Movie message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Movie
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): multiverse.Movie;

        /**
         * Verifies a Movie message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Movie message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Movie
         */
        public static fromObject(object: { [k: string]: any }): multiverse.Movie;

        /**
         * Creates a plain object from a Movie message. Also converts values to other types if specified.
         * @param message Movie
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: multiverse.Movie, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Movie to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Movie
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GitHubAccount. */
    interface IGitHubAccount {

        /** GitHubAccount name */
        name?: (string|null);
    }

    /** Represents a GitHubAccount. */
    class GitHubAccount implements IGitHubAccount {

        /**
         * Constructs a new GitHubAccount.
         * @param [properties] Properties to set
         */
        constructor(properties?: multiverse.IGitHubAccount);

        /** GitHubAccount name. */
        public name: string;

        /**
         * Creates a new GitHubAccount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GitHubAccount instance
         */
        public static create(properties?: multiverse.IGitHubAccount): multiverse.GitHubAccount;

        /**
         * Encodes the specified GitHubAccount message. Does not implicitly {@link multiverse.GitHubAccount.verify|verify} messages.
         * @param message GitHubAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: multiverse.IGitHubAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GitHubAccount message, length delimited. Does not implicitly {@link multiverse.GitHubAccount.verify|verify} messages.
         * @param message GitHubAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: multiverse.IGitHubAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GitHubAccount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GitHubAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): multiverse.GitHubAccount;

        /**
         * Decodes a GitHubAccount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GitHubAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): multiverse.GitHubAccount;

        /**
         * Verifies a GitHubAccount message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GitHubAccount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GitHubAccount
         */
        public static fromObject(object: { [k: string]: any }): multiverse.GitHubAccount;

        /**
         * Creates a plain object from a GitHubAccount message. Also converts values to other types if specified.
         * @param message GitHubAccount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: multiverse.GitHubAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GitHubAccount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GitHubAccount
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GitHubRepo. */
    interface IGitHubRepo {

        /** GitHubRepo owner */
        owner?: (multiverse.IGitHubAccount|null);

        /** GitHubRepo name */
        name?: (string|null);
    }

    /** Represents a GitHubRepo. */
    class GitHubRepo implements IGitHubRepo {

        /**
         * Constructs a new GitHubRepo.
         * @param [properties] Properties to set
         */
        constructor(properties?: multiverse.IGitHubRepo);

        /** GitHubRepo owner. */
        public owner?: (multiverse.IGitHubAccount|null);

        /** GitHubRepo name. */
        public name: string;

        /**
         * Creates a new GitHubRepo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GitHubRepo instance
         */
        public static create(properties?: multiverse.IGitHubRepo): multiverse.GitHubRepo;

        /**
         * Encodes the specified GitHubRepo message. Does not implicitly {@link multiverse.GitHubRepo.verify|verify} messages.
         * @param message GitHubRepo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: multiverse.IGitHubRepo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GitHubRepo message, length delimited. Does not implicitly {@link multiverse.GitHubRepo.verify|verify} messages.
         * @param message GitHubRepo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: multiverse.IGitHubRepo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GitHubRepo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GitHubRepo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): multiverse.GitHubRepo;

        /**
         * Decodes a GitHubRepo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GitHubRepo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): multiverse.GitHubRepo;

        /**
         * Verifies a GitHubRepo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GitHubRepo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GitHubRepo
         */
        public static fromObject(object: { [k: string]: any }): multiverse.GitHubRepo;

        /**
         * Creates a plain object from a GitHubRepo message. Also converts values to other types if specified.
         * @param message GitHubRepo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: multiverse.GitHubRepo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GitHubRepo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GitHubRepo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Markdown. */
    interface IMarkdown {

        /** Markdown markdown */
        markdown?: (string|null);
    }

    /** Represents a Markdown. */
    class Markdown implements IMarkdown {

        /**
         * Constructs a new Markdown.
         * @param [properties] Properties to set
         */
        constructor(properties?: multiverse.IMarkdown);

        /** Markdown markdown. */
        public markdown: string;

        /**
         * Creates a new Markdown instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Markdown instance
         */
        public static create(properties?: multiverse.IMarkdown): multiverse.Markdown;

        /**
         * Encodes the specified Markdown message. Does not implicitly {@link multiverse.Markdown.verify|verify} messages.
         * @param message Markdown message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: multiverse.IMarkdown, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Markdown message, length delimited. Does not implicitly {@link multiverse.Markdown.verify|verify} messages.
         * @param message Markdown message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: multiverse.IMarkdown, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Markdown message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Markdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): multiverse.Markdown;

        /**
         * Decodes a Markdown message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Markdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): multiverse.Markdown;

        /**
         * Verifies a Markdown message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Markdown message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Markdown
         */
        public static fromObject(object: { [k: string]: any }): multiverse.Markdown;

        /**
         * Creates a plain object from a Markdown message. Also converts values to other types if specified.
         * @param message Markdown
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: multiverse.Markdown, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Markdown to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Markdown
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
