/**
 * body要素の変更を監視し、指定されたハンドラ関数を実行します。
 *
 * @param handlerFunction - bodyの内容が変更されたときに実行される関数。
 */
export default function observeBodyChanges(handlerFunction: () => void): void {
  // DOMの変更を処理するコールバック
  const handleMutation: MutationCallback = (mutations, observer) => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList' || mutation.type === 'attributes') {
        handlerFunction();
        break; // 関連する変更が見つかったら、ループを終了します
      }
    }
  };

  // コールバックでMutationObserverを初期化
  const observer = new MutationObserver(handleMutation);

  // オブザーバーの設定
  const config: MutationObserverInit = {
    attributes: true,
    childList: true,
    // subtree: true,  // より深いDOMノードの変更を監視する必要がある場合は、この行を有効にしてください
  };

  // bodyの変更を監視を開始
  observer.observe(document.body, config);

  // 監視を停止する場合は、次の行のコメントを外してください
  // observer.disconnect();
}
