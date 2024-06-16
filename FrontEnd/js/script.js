function showMoreInfo() {
    var moreInfoDiv = document.getElementById('more-info');
    if (moreInfoDiv.classList.contains('hidden')) {
        moreInfoDiv.classList.remove('hidden');
    } else {
        moreInfoDiv.classList.add('hidden');
    }
}
