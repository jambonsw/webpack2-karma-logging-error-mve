# Read Me

**Change of Plans**: If you're on this branch, it means you're here for
[issue 146 of
karma-webpack](https://github.com/webpack/karma-webpack/issues/146). The
only difference between this branch and master is that the following
command has been run on this branch: `npm i --save-dev
jambonsw/karma-webpack#issue_146_fix_no_provider_errors`

Minimum-Viable-Example to demonstrate Promise errors and console logging
errors in Karma using Webpack 2.

Use the command below to install the tools necessary to run tests.

```console
npm install
```

To run tests, simply run:

```console
npm test
```

## Expected Behavior

The behavior below is seen running on macOS 10.11.5 with npm 3.8.8 and
node v5.11.0.  All other dependencies are declared explicitly in
[`package.json`](https://github.com/jambonsw/webpack2-karma-logging-error-mve/blob/master/package.json).

1. Everytime karma fetches a file, a warning about promises will be
   raised. See the [karma
   issue](https://github.com/karma-runner/karma/issues/2227) for more
   info.

2. Despite [limiting console output to only
   errors](https://github.com/jambonsw/webpack2-karma-logging-error-mve/blob/master/karma.conf.js#L33),
   the terminal will output the `hello there!` console debug message
   from
   [`main.js`](https://github.com/jambonsw/webpack2-karma-logging-error-mve/blob/master/src/main.js#L2).
   See the [karma
   issue](https://github.com/karma-runner/karma/issues/2228) for more
   info.
