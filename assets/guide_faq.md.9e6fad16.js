import{_ as e,c as o,o as a,a as t}from"./app.e7ea9d7c.js";const f='{"title":"FAQ","description":"","frontmatter":{},"headers":[{"level":2,"title":"Warning: Required @OA\\\\Info() not found","slug":"warning-required-oa-info-not-found"},{"level":2,"title":"Skipping unknown \\\\SomeClass","slug":"skipping-unknown-someclass"},{"level":3,"title":"Using the -b --bootstrap option","slug":"using-the-b-bootstrap-option"},{"level":3,"title":"Namespace mismatch","slug":"namespace-mismatch"},{"level":2,"title":"No output from openapi command line tool","slug":"no-output-from-openapi-command-line-tool"}],"relativePath":"guide/faq.md"}',n={},s=t(`<h1 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-hidden="true">#</a></h1><h2 id="warning-required-oa-info-not-found" tabindex="-1">Warning: Required <code>@OA\\Info()</code> not found <a class="header-anchor" href="#warning-required-oa-info-not-found" aria-hidden="true">#</a></h2><p>With adding support for <a href="https://www.php.net/manual/en/language.attributes.php" target="_blank" rel="noopener noreferrer">PHP attributes</a> in version 4, some architectural changes had to be made.</p><p>One of those changes is that placing annotations in your source files is now subject to the same limitations as attributes. These limits are dictated by the PHP reflection API, specifically where it provides access to attributes and doc comments.</p><p>This means stand-alone annotations are no longer supported and ignored as <code>swagger-php</code> cannot &#39;see&#39; them any more.</p><p>Supported locations:</p><ul><li>class</li><li>interface</li><li>trait</li><li>method</li><li>property</li><li>class/interface const</li></ul><p>Most commonly this manifests with a warning about the required <code>@OA\\Info</code> not being found. While most annotations have specific related code, the info annotation (and a few more) is kind of global.</p><p>The simplest solution to avoid this issue is to add a &#39;dummy&#39; class to the docblock and add all &#39;global&#39; annotations (e.g. <code>Tag</code>, <code>Server</code>, <code>SecurityScheme</code>, etc.) <strong>in a single docblock</strong> to that class.</p><div class="language-php"><pre><code><span class="token comment">/**
 * @OA\\Tag(
 *     name=&quot;user&quot;,
 *     description=&quot;User related operations&quot;
 * )
 * @OA\\Info(
 *     version=&quot;1.0&quot;,
 *     title=&quot;Example API&quot;,
 *     description=&quot;Example info&quot;,
 *     @OA\\Contact(name=&quot;Swagger API Team&quot;)
 * )
 * @OA\\Server(
 *     url=&quot;https://example.localhost&quot;,
 *     description=&quot;API server&quot;
 * )
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">OpenApiSpec</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="skipping-unknown-someclass" tabindex="-1">Skipping unknown <code>\\SomeClass</code> <a class="header-anchor" href="#skipping-unknown-someclass" aria-hidden="true">#</a></h2><p>This message means that <code>swagger-php</code> has tried to use reflection to inspect <code>\\SomeClass</code> and that PHP could not find/load that class. Effectively, this means that <code>class_exists(&quot;\\SomeClass&quot;)</code> returns <code>false</code>.</p><h3 id="using-the-b-bootstrap-option" tabindex="-1">Using the <code>-b</code> <code>--bootstrap</code> option <a class="header-anchor" href="#using-the-b-bootstrap-option" aria-hidden="true">#</a></h3><p>There are a number of reasons why this could happen. If you are using the <code>openapi</code> command line tool from a global installation typically the application classloader (composer) is not active. With you application root being <code>myapp</code> you could try:</p><div class="language-shell"><pre><code>openapi <span class="token parameter variable">-b</span> myapp/vendor/autoload.php myapp/src
</code></pre></div><p>The <code>-b</code> allows to execute some extra PHP code to load whatever is needed to register your apps classloader with PHP.</p><h3 id="namespace-mismatch" tabindex="-1">Namespace mismatch <a class="header-anchor" href="#namespace-mismatch" aria-hidden="true">#</a></h3><p>Another reason for this error could be that your class actually has the wrong namespace (or no namespace at all!).</p><p>Depending on your framework this might still work in the context of your app, but the composer autoloader alone might not be able to load your class (assuming you are using composer).</p><h2 id="no-output-from-openapi-command-line-tool" tabindex="-1">No output from <code>openapi</code> command line tool <a class="header-anchor" href="#no-output-from-openapi-command-line-tool" aria-hidden="true">#</a></h2><p>Depending on your PHP configuration, running the <code>openapi</code> command line tool might result in no output at all.</p><p>The reason for this is that <code>openapi</code> currently uses the <a href="https://www.php.net/manual/en/function.error-log.php" target="_blank" rel="noopener noreferrer"><code>error_log</code></a> function for all output.</p><p>So if this is configured to write to a file, then it will seem like the command is broken.</p>`,23),i=[s];function r(c,l,p,d,u,h){return a(),o("div",null,i)}var g=e(n,[["render",r]]);export{f as __pageData,g as default};
