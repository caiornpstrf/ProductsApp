import get from 'lodash/get';

import globalStrings from './strings.json';
import { getBoldText } from './getBoldText';

type Key = string;
type Params = Record<string, string | number> | null | undefined;

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

  const replaceParams = (
    rawString: string,
    params: Record<string, string | number>,
  ) => {
    let stringWithParams = rawString;
    Object.keys(params).forEach(paramKey => {
      stringWithParams = stringWithParams.replace(
        `{{ ${paramKey} }}`,
        params[paramKey].toString(),
      );
    });
    return stringWithParams;
  };

  const getFromJson = (
    key: Key,
    params?: Params,
    fallbackKey?: Key,
  ): string => {
    const rawString = get(featureSpecificStrings, key);
    const stringWithParams = params
      ? replaceParams(rawString, params)
      : rawString;
    return (
      stringWithParams ||
      (fallbackKey && get(featureSpecificStrings, fallbackKey)) ||
      displayFallback(key)
    );
  };

  return {
    text: getFromJson,
    bold: getBoldText,
  };
}
