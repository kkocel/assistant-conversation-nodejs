/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as Schema from '../../../api/schema'

/**
 * Basic cards are designed to be concise, to present key (or summary)
 * information to users, and to allow users to learn more if you choose (using
 * a web link).
 *
 * Use basic cards mainly for display purposes, as they have no interaction
 * capabilities without a button. To link a button to the web, a surface must
 * also have the `WEB_LINK` capability.
 *
 * @example
 * ```javascript
 * app.handle('Card', conv => {
 *   conv.add('This is a card.');
 *   conv.add(new Card({
 *     "title": "Card Title",
 *     "subtitle": "Card Subtitle",
 *     "text": "Card Content",
 *     "image": new Image({
 *       url: 'https://developers.google.com/assistant/assistant_96.png',
 *       alt: 'Google Assistant logo'
 *     })
 *   }));
 * });
 * ```
 *
 * @see {@link https://developers.google.com/assistant/conversational/prompts-rich#basic_card | Developer Documentation}
 */
export class Card implements Schema.Card {
  /**
   * Button.
   * Optional.
   */
  button?: Schema.Link
  /**
   * A hero image for the card. The height is fixed to 192dp.
   * Optional.
   */
  image?: Schema.Image
  /**
   * How the image background will be filled. Optional.
   */
  imageFill?: Schema.ImageFill
  /**
   * Optional.
   */
  subtitle?: string
  /**
   * Body text of the card.
   * Supports a limited set of markdown syntax for formatting.
   * Required, unless image is present.
   */
  text?: string
  /**
   * Overall title of the card.
   * Optional.
   */
  title?: string
  /** @hidden */
  constructor(input: Schema.Card = {}) {
    Object.assign(this, input)
  }

}
