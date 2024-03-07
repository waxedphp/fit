<?php
namespace Waxedphp\Fit;

use \Waxedphp\Waxedphp\Setters\AbstractSetter;

class Setter extends AbstractSetter {

  /**
  */
  protected ?string $scrollTo = null;
  protected ?string $scrollToName = null;

  /**
   * allowed options
   *
   * @var array<mixed> $_allowedOptions
   */
  protected array $_allowedOptions = [
    'scrollTo', 'scrollToName'
  ];

  /**
  * value
  *
  * @param mixed $value
  * @return array<mixed>
  */
  public function value(mixed $value): array {
    $a = $this->getArrayOfAllowedOptions();
    return $a;
  }

}
