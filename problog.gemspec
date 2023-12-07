# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-problog"
  spec.version       = "0.1.2"
  spec.authors       = ["David McWee"]
  spec.email         = ["dmcwee@microsoft.com"]

  spec.summary       = "ProBlog theme from the theme and layouts I created for my own professional blog."
  spec.homepage      = "https://github.com/dmcwee/problog"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.0"
  spec.add_development_dependency "html-proofer", "~> 3.0"
  spec.add_development_dependency "rubocop-github", "~> 0.16"
  spec.add_development_dependency "w3c_validators", "~> 1.3"
  # spec.add_runtime_dependency "kramdown-parser-gfm"
  # spec.add_runtime_dependency "rouge"
  # spec.add_runtime_dependency "webrick"
end
