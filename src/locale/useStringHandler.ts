import get from 'lodash/get';

import globalStrings from './strings.json';
import { getBoldText } from './getBoldText';

type Key = string;
type Params =
  | Record<string, string | number | undefined | null>
  | null
  | undefined;

/**
 * Hook that handles string retrieval and parameter replacement;
 * Strings are stored in a JSON file and are accessed by a key;
 * Using lodash get to access nested keys via string dot notation;
 * Params are replaced in the string by using {{ paramKey }}.
 *
 * This is similar to the useTranslation hook from i18next, but with a simpler implementation
 *
 * @param featureName - Optional feature name key to access feature specific strings
 * @returns { text } - Function that returns a string based on a key and optional parameters
 */
export function useStringHandler(featureName?: string) {
  const featureSpecificStrings =
    get(globalStrings, featureName ?? '') || globalStrings;

  const displayFallback = (key: string) =>
    `{ String not found for key: ${key} }`;

  const replaceParams = (rawString: string, params: Params) => {
    if (!params) {
      return rawString;
    }

    let stringWithParams = rawString;

    for (const [key, value] of Object.entries(params)) {
      if (value) {
        stringWithParams = stringWithParams.replace(
          `{{ ${key} }}`,
          value.toString(),
        );
      }
    }

    return stringWithParams;
  };

  const getFromJson = (
    key: Key,
    params?: Params,
  ): string => {
    const rawString = get(featureSpecificStrings, key);
    const stringWithParams = replaceParams(rawString, params);

    return stringWithParams || displayFallback(key);
  };

  return {
    text: getFromJson,
    bold: getBoldText,
  };
}
