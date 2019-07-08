
Problem Statement -

----------------------------------------------------------------------------------------

How to run a simple es6 file in your local system?

-----------------------------------------------------------------------------------------

Observations-

-----------------------------------------------------------------------------------------

1. Node can't understand some of the es6 statements (import statements) as well as the browser, and hence will give you an error during compilation.

2. Babel comes into picture, which is a transpiler. It simply transpiles our es6 code into es5 which can later run by node or browser.

3. Running babel command with any file will just give you the output in requiered format.

4. If you just run "babel index.js" without any arguments, it will just give you the same file as output, since we haven't asked babel to convert our code to spec. version.

5. Now "babel --presets es2015 index.js" tells babel to look for index.js and convert that code to es2015 version and produce the output. Now that output can be stored and used to run by node.

6. Required dependencies --> babel-cli for running babel
                         --> babel-presets-es2015 or the version which you want your code to be transpiled to.

7. babel --presets es2015 index.js -o output.js --> -o flag can be used to tell babel to output the compile file to a seperate file
                                                --> -d flage can be used for directories

        Refer to https://babeljs.io/docs/en/babel-cli link for more babel commands.

8. Another way of telling babel about the version we want our file to be compiled into, is using .babelrc file. --> Check this file in root directory

9. Whenever you run a babel command, it checks for .babelrc in the root directory and apply the rules mentioned in that file.

------------------------------------------------------------------------------------------------

Conclusion

-------------------------------------------------------------------------------------------------

1. Mention the preset version in .babelrc

2. Write your code in index.js

3. Run npm run build which will generate an output.js file with compiled code

4. Run npm run serve which will run your output.js file

5. (optional) Run npm run start which will do the both above mentioned operations.

-----------------------------------------------------------------------------------------------------------------------------

Can also use directories and place all your files in that directory --> Change the scripts in package.json as required.

