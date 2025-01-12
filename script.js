document.getElementById('generateDorkButton').addEventListener('click', function() {
    var domain = document.getElementById('domainInput').value;
    var dorkCategory = document.getElementById('dorkSelect').value;

var dorks = {
'WordPress': [
    'inurl:"wp-content/"',
    'inurl:"wp-admin/"',
    'inurl:"wp-login.php"',
    'inurl:"wp-includes/"',
    'inurl:"wp-config.php"',
    'intitle:"Index of /wp-content"',
    'intitle:"Index of /wp-admin"',
    'inurl:"/wp-content/uploads/"',
    'inurl:"/wp-json/wp/"',
    'inurl:"/wp-content/plugins/"',
    'inurl:"/wp-content/themes/"',
    'inurl:"/wp-content/languages/"',
    'inurl:"/wp-content/cache/"',
    'inurl:"/wp-comments-post.php"',
    'inurl:"/xmlrpc.php"',
    'inurl:"/wp-cron.php"',
    'inurl:"/wp-signup.php"',
    'inurl:"/wp-activate.php"',
    'inurl:"/wp-trackback.php"',
    'intitle:"Index of /wp-includes"',
    'inurl:"/wp-sitemap.xml"',
    'inurl:"/wp-sitemap-index.xml"',
    'inurl:"/wp-json/oembed/1.0/embed"',
    'inurl:"/wp-json/wp/v2/users"',
    'inurl:"/wp-content/uploads/sucuri/sucuri.php"',
    'inurl:"/wp-admin/admin-ajax.php"'
],
'Joomla': [
    'inurl:"index.php?option=com_"',
    'inurl:"/administrator/"',
    'inurl:"/administrator/index.php"',
    'inurl:"/components/com_"',
    'inurl:"/libraries/joomla/"',
    'inurl:"/language/en-GB/en-GB.xml"',
    'inurl:"/templates/beez3/"',
    'intitle:"Index of /components/com_"',
    'intitle:"Index of /templates/"',
    'inurl:"/modules/mod_"',
    'inurl:"/plugins/system/"',
    'inurl:"/plugins/content/"',
    'inurl:"/media/com_"',
    'inurl:"/media/system/js/"',
    'inurl:"/templates/protostar/"',
    'inurl:"/administrator/backups/"',
    'inurl:"/tmp/install_"',
    'inurl:"/configuration.php-dist"',
    'inurl:"/logs/error.php"',
    'inurl:"/configuration.php~"',
    'inurl:"/joomla.xml"',
    'inurl:"/administrator/logs/"',
    'inurl:"/logs/joomla_update.php"',
    'inurl:"/cache/page/"',
    'inurl:"/cache/com_"',
    'inurl:"/cache/mod_"',
    'inurl:"/tmp/logs/"',
    'inurl:"/tmp/com_"',
    'inurl:"/tmp/module.xml"',
    'inurl:"/logs/error.php"',
    'inurl:"/modules/mod_"',
    'inurl:"/templates/_system/"'
],
'SQL Injection': [
    'inurl:"id=" intitle:"index of"',
    'inurl:"item.php?id="',
    'inurl:"product.php?id="',
    'inurl:"view_item.php?id="',
    'inurl:"details.php?id="',
    'inurl:"article.php?id="',
    'inurl:"page.php?id="',
    'inurl:"news.php?id="',
    'inurl:"post.php?id="',
    'inurl:"blog.php?id="'
],
'XSS Injection': [
    'inurl:"/search?q="',  
    'inurl:"/index.php?lang="',  
    'inurl:"/index.php?page="',  
    'inurl:"/search?query="',  
    'inurl:"/index.php?id="',  
    'inurl:"/search.php?q="',  
    'inurl:"/?p="',  
    'inurl:"/?q="',  
    'inurl:"/search/?q="',  
    'inurl:"/index.php?pn="',  
    'inurl:"/index.php?Itemid="',  
    'inurl:"/videos?search="',  
    'inurl:"/content.php?expand="',  
    'inurl:"/?page="',  
    'inurl:"/search-results?q="',  
    'inurl:"/?sort="',  
    'inurl:"/search?s"',
    'inurl:"search?q=aaa"',
    'inurl:"?query=aaa"',
    'inurl:"en-us/Search#/?search=aaa"',
    'inurl:"Search/Results?q=aaa"',
    'inurl:"q=aaa"',
    'inurl:"foo?q=aaa"',
    'inurl:"search.php?query=aaa"',
    'inurl:"en-us/search?q=aaa"',
    'inurl:"s=aaa"',
    'inurl:"find?q=aaa"',
    'inurl:"result?q=aaa"',
    'inurl:"query?q=aaa"',
    'inurl:"search?term=aaa"',
    'inurl:"search?query=aaa"',
    'inurl:"search?keywords=aaa"',
    'inurl:"search?text=aaa"',
    'inurl:"search?word=aaa"',
    'inurl:"find?query=aaa"',
    'inurl:"result?query=aaa"',
    'inurl:"search?input=aaa"',
    'inurl:"search/results?query=aaa"',
    'inurl:"search-results?q=aaa"',
    'inurl:"search?keyword=aaa"',
    'inurl:"results?query=aaa"',
    'inurl:"search?search=aaa"',
    'inurl:"search?searchTerm=aaa"',
    'inurl:"search?searchQuery=aaa"',
    'inurl:"search?searchKeyword=aaa"',
    'inurl:"search.php?q=aaa"',
    'inurl:"search/?query=aaa"',
    'inurl:"search/?q=aaa"',
    'inurl:"search/?search=aaa"',
    'inurl:"search.aspx?q=aaa"',
    'inurl:"search.aspx?query=aaa"',
    'inurl:"search.asp?q=aaa"',
    'inurl:"index.asp?id=aaa"',
    'inurl:"dashboard.asp?user=aaa"',
    'inurl:"blog/search/?query=aaa"',
    'inurl:"pages/searchpage.aspx?id=aaa"'
],
'LFI': [
    'inurl:"index.php?page="',  
    'inurl:"page.php?file="',  
    'inurl:"index.php?include="',  
    'inurl:"page.php?view="',  
    'inurl:"index.php?path="',  
    'inurl:"index.php?template="',  
    'inurl:"?inc="',  
    'inurl:"index.php?dir="',  
    'inurl:"page.php?folder="',  
    'inurl:"index.php?module="'
],
'RFI': [
    'inurl:"index.php?file="',  
    'inurl:"index.php?site="',  
    'inurl:"page.php?include="',  
    'inurl:"index.php?load="',  
    'inurl:"index.php?url="',  
    'inurl:"page.php?template="',  
    'inurl:"index.php?layout="',  
    'inurl:"page.php?theme="'
],
'Files and Juicy Files': [
    'intitle:"index of" (config|configuration|settings) filetype:conf',
    'intitle:"index of" .env',
    'intitle:"index of" backup',
    'intitle:"index of" db_backup',
    'intitle:"index of" dump.sql',
    'intitle:"index of" database_backup',
    'intitle:"index of" backup.sql',
    'intitle:"index of" db_dump',
    'intitle:"index of" configuration',
    'intitle:"index of" secrets'
],
'Program and Bug Bounty': [
    'inurl:"/bug-bounty/" OR inurl:"/security/" intitle:"bug bounty"',
    'inurl:"/bug-bounty-program" intitle:"bug bounty"',
    'inurl:"/vulnerability" intitle:"bug bounty"',
    'inurl:"/security-program" intitle:"bug bounty"',
    'inurl:"/report" intitle:"bug bounty"',
    'inurl:"/security" intitle:"bug bounty"',
    'inurl:"/vuln" intitle:"bug bounty"',
    'inurl:"/responsible-disclosure" intitle:"bug bounty"',
    'inurl:"/security/bug-bounty"',
    'inurl:"/bounties" intitle:"bug bounty"'
],
'Admin Panel': [
    'intitle:"admin" OR intitle:"administration" OR inurl:"/admin" OR inurl:"/admin/"',
    'intitle:"admin panel" OR inurl:"/admin"',
    'intitle:"administration" OR inurl:"/admin_login"',
    'inurl:"/admin/dashboard"',
    'inurl:"/admincp"',
    'inurl:"/admin_area"',
    'inurl:"/admin/login"',
    'inurl:"/admin_panel"',
    'inurl:"/admin/" intitle:"login"',
    'inurl:"/admin/" intitle:"admin"'
],
'Portal': [
    'intitle:"login" OR intitle:"sign in" OR inurl:"/login" OR inurl:"/signin"',
    'intitle:"user login" OR intitle:"login page"',
    'inurl:"/user/login"',
    'inurl:"/login.php"',
    'inurl:"/login.jsp"',
    'inurl:"/signin"',
    'intitle:"portal" inurl:"/login"',
    'intitle:"account" inurl:"/login"',
    'intitle:"sign in" inurl:"/auth"',
    'inurl:"/admin/login"'
],
'API Keys': [
    'intitle:"index of" api_key OR "api_key" OR "apikey" filetype:txt',
    'intitle:"index of" "api_secret" filetype:txt',
    'intitle:"index of" "access_token" filetype:txt',
    'intitle:"index of" "API_KEY" filetype:txt',
    'intitle:"index of" "api_token" filetype:txt',
    'intitle:"index of" "api_key" filetype:json',
    'intitle:"index of" "apikey" filetype:json',
    'intitle:"index of" "api_secret" filetype:json',
    'intitle:"index of" "access_token" filetype:json',
    'intitle:"index of" "api_credentials" filetype:txt'
],
'Swagger API': [
    'inurl:"/swagger.json"',
    'inurl:"/swagger-ui.html"',
    'inurl:"/swagger-resources"',
    'inurl:"/api-docs/"',
    'inurl:"/v2/api-docs"',
    'inurl:"/swagger-resources/configuration/ui"',
    'inurl:"/swagger-resources/configuration/security"',
    'inurl:"/v2/api-docs?group="',
    'inurl:"/swagger-resources/configuration/ui"',
    'intitle:"swagger ui" "api documentation"',
    'inurl:"/swagger/swagger-ui.js"',
    'inurl:"/swagger-ui/dist/"',
    'inurl:"/swagger-ui/index.html"',
    'inurl:"/api-docs/index.html"',
    'intitle:"swagger ui" intext:"basePath"',
    'inurl:"/swagger-resources" ext:json',
    'inurl:"/v2/swagger.json"',
    'inurl:"/swagger-config.json"',
    'inurl:"/swagger-ui/swagger-ui.css"',
    'inurl:"/swagger/swagger-ui.css"',
    'inurl:"/api-docs/swagger-config"',
    'intitle:"Index of /swagger/"',
    'intitle:"Index of /api-docs/"',
    'inurl:"/swagger/v1/swagger.json"',
    'inurl:"/swagger/docs/v1"',
    'inurl:"/swagger/v1/swagger.yaml"'
],
'Web3': [
    'inurl:"/web3.js"',
    'inurl:"/web3.min.js"',
    'inurl:"/contracts/ABI"',
    'inurl:"/contracts/*.json"',
    'inurl:"/build/contracts/*.json"',
    'inurl:"/truffle-config.js"',
    'inurl:"/truffle.js"',
    'inurl:"/ganache-cli"',
    'inurl:"/openzeppelin/contracts"',
    'inurl:"/solc/v0.4.24+commit.e67f0147.js"',
    'inurl:"/web3-provider-engine"',
    'inurl:"/ethers.js"',
    'inurl:"/dapp.js"',
    'inurl:"/blockchain.js"',
    'inurl:"/mainnet.json"',
    'inurl:"/rinkeby.json"',
    'inurl:"/ropsten.json"',
    'inurl:"/etherscan-api-key"',
    'inurl:"/privatekey.txt"',
    'inurl:"/mnemonic.txt"',
    'inurl:"/walletconnect.html"',
    'inurl:"/metamask.html"',
    'inurl:"/wallet.json"',
    'inurl:"/contract-deploy.js"',
    'inurl:"/infura-token"',
    'inurl:"/wallets/"',
    'inurl:"/keys.json"',
    'inurl:"/keys.js"',
    'intitle:"Index of /web3/"',
    'intitle:"Index of /wallets/"',
    'intitle:"Index of /contracts/"',
    'inurl:"/eth.js"',
    'inurl:"/erc20.js"',
    'inurl:"/erc721.js"',
    'inurl:"/erc1155.js"',
    'inurl:"/contracts/Migrations.sol"',
    'inurl:"/contracts/SimpleStorage.sol"',
    'inurl:"/chainlink/contracts"',
    'inurl:"/uniswap/contracts"',
    'inurl:"/blockchain/*.sol"',
    'inurl:"/wallets.json"'
],
'Laravel': [
    'inurl:"/storage/logs/laravel.log"',
    'inurl:"/vendor/phpunit/phpunit/src/Framework/TestCase.php"',
    'inurl:"/artisan"',
    'inurl:"/server.php"',
    'inurl:"/env"',
    'inurl:"/public/index.php"',
    'inurl:"/routes/web.php"',
    'inurl:"/routes/api.php"',
    'inurl:"/storage/framework/cache/data/"',
    'inurl:"/bootstrap/cache"',
    'inurl:"/config/app.php"',
    'inurl:"/config/database.php"',
    'inurl:"/resources/views/welcome.blade.php"',
    'inurl:"/resources/views/errors/404.blade.php"',
    'inurl:"/app/Http/Controllers/"',
    'inurl:"/storage/app/public/"',
    'intitle:"Index of /storage/logs/"',
    'inurl:"/public/.htaccess"',
    'inurl:"/public/mix-manifest.json"',
    'inurl:"/config/session.php"',
    'inurl:"/resources/lang/en/validation.php"',
    'inurl:"/resources/js/app.js"',
    'inurl:"/composer.json"',
    'inurl:"/composer.lock"',
    'inurl:"/bootstrap/cache/config.php"',
    'inurl:"/database/migrations/"',
    'inurl:"/tests/TestCase.php"',
    'inurl:"/tests/CreatesApplication.php"',
    'inurl:"/routes/console.php"',
    'inurl:"/routes/channels.php"',
    'inurl:"/storage/framework/views/"'
],
'SSH Keys': [
    'intitle:"index of" id_rsa OR "id_rsa" filetype:txt',
    'intitle:"index of" id_dsa OR "id_dsa" filetype:txt',
    'intitle:"index of" id_ecdsa OR "id_ecdsa" filetype:txt',
    'intitle:"index of" id_ed25519 OR "id_ed25519" filetype:txt',
    'intitle:"index of" authorized_keys',
    'intitle:"index of" "ssh_key" filetype:txt',
    'intitle:"index of" "ssh_private_key" filetype:txt',
    'intitle:"index of" "ssh_public_key" filetype:txt',
    'intitle:"index of" "private_key" filetype:txt',
    'intitle:"index of" "ssh" filetype:txt'
],
'Configuration Files': [
    'intitle:"index of" (config|configurations|config.php|database) filetype:php',
    'intitle:"index of" config filetype:conf',
    'intitle:"index of" configuration filetype:json',
    'intitle:"index of" config.yaml',
    'intitle:"index of" config.xml',
    'intitle:"index of" settings.php',
    'intitle:"index of" db_config',
    'intitle:"index of" app_config',
    'intitle:"index of" configuration.yml',
    'intitle:"index of" settings.xml'
],
'Others': [
    'intitle:"index of" ext:xml | ext:conf | ext:cnf | ext:reg | ext:inf | ext:rdp | ext:cfg | ext:txt | ext:ora | ext:ini',
    'ext:sql | ext:dbf | ext:mdb',
    'ext:log',
    'ext:bkf | ext:bkp | ext:bak | ext:old | ext:backup',
    'inurl:"login"',
    'intext:"sql syntax near" | intext:"syntax error has occurred" | intext:"incorrect syntax near" | intext:"unexpected end of SQL command" | intext:"Warning: mysql_connect()" | intext:"Warning: mysql_query()" | intext:"Warning: pg_connect()"',
    'ext:doc | ext:docx | ext:odt | ext:pdf | ext:rtf | ext:sxw | ext:psw | ext:ppt | ext:pptx | ext:pps | ext:csv',
    'ext:php intitle:"phpinfo" "published by the PHP Group"',
    'inurl:"wp-" | inurl:"wp-content" | inurl:"plugins" | inurl:"uploads" | inurl:"themes" | inurl:"download"',
    'inurl:"shell" | inurl:"backdoor" | inurl:"wso" | inurl:"cmd" | shadow | passwd | boot.ini | inurl:"backdoor"',
    'inurl:"readme" | inurl:"license" | inurl:"install" | inurl:"setup" | inurl:"config"',
    'inurl:"redir" | inurl:"url" | inurl:"redirect" | inurl:"return" | inurl:"src=http" | inurl:"r=http"',
    'ext:action | ext:struts | ext:do',
    'inurl:"/phpinfo.php" | inurl:".htaccess" | inurl:"/.git"',
    'inurl:"wp-content" | inurl:"wp-includes"',
    'inurl:"/crossdomain.xml"',
    'inurl:"/ext:swf"'
],
    };

    var selectedDorks = dorks[dorkCategory] || [];
    var dorkList = document.getElementById('dorkList');
    dorkList.innerHTML = ''; // Clear previous dorks

    selectedDorks.forEach(function(dork) {
        var listItem = document.createElement('li');
        listItem.textContent = `site:*.${domain} ${dork}`;
        dorkList.appendChild(listItem);
    });
});

document.getElementById('playSoundButton').addEventListener('click', function() {
    var audio = document.getElementById('backgroundMusic');
    if (audio.paused) {
        audio.play();
        this.textContent = 'Pause Sound';
    } else {
        audio.pause();
        this.textContent = 'Play Sound';
    }
});
