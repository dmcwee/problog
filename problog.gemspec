# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "problog"
  spec.version       = "0.1.0"
  spec.authors       = ["David McWee"]
  spec.email         = ["dmcwee@microsoft.com"]

  spec.summary       = "ProBlog theme from the theme and layouts I created for my own professional blog."
  spec.homepage      = "https://github.com/dmcwee/problog"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
end
