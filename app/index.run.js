(function() {
  'use strict';

  angular
    .module('memhamwanGithubIo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
