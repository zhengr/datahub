# DataHub CLI

DataHub comes with a friendly cli called `datahub` that allows you to perform a lot of common operations using just the command line.

## Release Notes

You can find the release notes in [github releases](https://github.com/linkedin/datahub/releases). If you wish release notes for each bug-fix release you can find them in [acryldata releases](https://github.com/acryldata/datahub/releases).

## Installation
### Using pip

We recommend python virtual environments (venv-s) to namespace pip modules. The folks over at [Acryl Data](https://www.acryl.io/) maintain a PyPI package for DataHub metadata ingestion. Here's an example setup:

```shell
python3 -m venv datahub-env             # create the environment
source datahub-env/bin/activate         # activate the environment
```

**_NOTE:_** If you install `datahub` in a virtual environment, that same virtual environment must be re-activated each time a shell window or session is created.

Once inside the virtual environment, install `datahub` using the following commands

```shell
# Requires Python 3.6+
python3 -m pip install --upgrade pip wheel setuptools
python3 -m pip install --upgrade acryl-datahub
datahub version
# If you see "command not found", try running this instead: python3 -m datahub version
```

If you run into an error, try checking the [_common setup issues_](../metadata-ingestion/developing.md#Common-setup-issues).

### Using docker

[![Docker Hub](https://img.shields.io/docker/pulls/linkedin/datahub-ingestion?style=plastic)](https://hub.docker.com/r/linkedin/datahub-ingestion)
[![datahub-ingestion docker](https://github.com/linkedin/datahub/actions/workflows/docker-ingestion.yml/badge.svg)](https://github.com/linkedin/datahub/actions/workflows/docker-ingestion.yml)

If you don't want to install locally, you can alternatively run metadata ingestion within a Docker container.
We have prebuilt images available on [Docker hub](https://hub.docker.com/r/linkedin/datahub-ingestion). All plugins will be installed and enabled automatically.

You can use the `datahub-ingestion` docker image as explained in [Docker Images](../docker/README.md). In case you are using Kubernetes you can start a pod with the `datahub-ingestion` docker image, log onto a shell on the pod and you should have the access to datahub CLI in your kubernetes cluster.

_Limitation: the datahub_docker.sh convenience script assumes that the recipe and any input/output files are accessible in the current working directory or its subdirectories. Files outside the current working directory will not be found, and you'll need to invoke the Docker image directly._

```shell
# Assumes the DataHub repo is cloned locally.
./metadata-ingestion/scripts/datahub_docker.sh ingest -c ./examples/recipes/example_to_datahub_rest.yml
```

### Install from source

If you'd like to install from source, see the [developer guide](../metadata-ingestion/developing.md).

## Installing Plugins

We use a plugin architecture so that you can install only the dependencies you actually need. Click the plugin name to learn more about the specific source recipe and any FAQs!

### Sources

| Plugin Name                                                     | Install Command                                            | Provides                            |
|-----------------------------------------------------------------|------------------------------------------------------------| ----------------------------------- |
| [file](../metadata-ingestion/source_docs/file.md)                                   | _included by default_                                      | File source and sink                |
| [athena](../metadata-ingestion/source_docs/athena.md)                               | `pip install 'acryl-datahub[athena]'`                      | AWS Athena source                   |
| [bigquery](../metadata-ingestion/source_docs/bigquery.md)                           | `pip install 'acryl-datahub[bigquery]'`                    | BigQuery source                     |
| [bigquery-usage](../metadata-ingestion/source_docs/bigquery.md)                     | `pip install 'acryl-datahub[bigquery-usage]'`              | BigQuery usage statistics source    |
| [datahub-business-glossary](../metadata-ingestion/source_docs/business_glossary.md) | _no additional dependencies_                               | Business Glossary File source                         |
| [dbt](../metadata-ingestion/source_docs/dbt.md)                                     | _no additional dependencies_                               | dbt source                          |
| [druid](../metadata-ingestion/source_docs/druid.md)                                 | `pip install 'acryl-datahub[druid]'`                       | Druid Source                        |
| [feast](../metadata-ingestion/source_docs/feast.md)                                 | `pip install 'acryl-datahub[feast]'`                       | Feast source                        |
| [glue](../metadata-ingestion/source_docs/glue.md)                                   | `pip install 'acryl-datahub[glue]'`                        | AWS Glue source                     |
| [hive](../metadata-ingestion/source_docs/hive.md)                                   | `pip install 'acryl-datahub[hive]'`                        | Hive source                         |
| [kafka](../metadata-ingestion/source_docs/kafka.md)                                 | `pip install 'acryl-datahub[kafka]'`                       | Kafka source                        |
| [kafka-connect](../metadata-ingestion/source_docs/kafka-connect.md)                 | `pip install 'acryl-datahub[kafka-connect]'`               | Kafka connect source                |
| [ldap](../metadata-ingestion/source_docs/ldap.md)                                   | `pip install 'acryl-datahub[ldap]'` ([extra requirements]) | LDAP source                         |
| [looker](../metadata-ingestion/source_docs/looker.md)                               | `pip install 'acryl-datahub[looker]'`                      | Looker source                       |
| [lookml](../metadata-ingestion/source_docs/lookml.md)                               | `pip install 'acryl-datahub[lookml]'`                      | LookML source, requires Python 3.7+ |
| [metabase](../metadata-ingestion/source_docs/metabase.md)                           | `pip install 'acryl-datahub[metabase]`                     | Metabase source                     |
| [mode](../metadata-ingestion/source_docs/mode.md)                                   | `pip install 'acryl-datahub[mode]'`                        | Mode Analytics source               |
| [mongodb](../metadata-ingestion/source_docs/mongodb.md)                             | `pip install 'acryl-datahub[mongodb]'`                     | MongoDB source                      |
| [mssql](../metadata-ingestion/source_docs/mssql.md)                                 | `pip install 'acryl-datahub[mssql]'`                       | SQL Server source                   |
| [mysql](../metadata-ingestion/source_docs/mysql.md)                                 | `pip install 'acryl-datahub[mysql]'`                       | MySQL source                        |
| [mariadb](../metadata-ingestion/source_docs/mariadb.md)                             | `pip install 'acryl-datahub[mariadb]'`                     | MariaDB source                      |
| [openapi](../metadata-ingestion/source_docs/openapi.md)                             | `pip install 'acryl-datahub[openapi]'`                     | OpenApi Source                      |
| [oracle](../metadata-ingestion/source_docs/oracle.md)                               | `pip install 'acryl-datahub[oracle]'`                      | Oracle source                       |
| [postgres](../metadata-ingestion/source_docs/postgres.md)                           | `pip install 'acryl-datahub[postgres]'`                    | Postgres source                     |
| [redash](../metadata-ingestion/source_docs/redash.md)                               | `pip install 'acryl-datahub[redash]'`                      | Redash source                       |
| [redshift](../metadata-ingestion/source_docs/redshift.md)                           | `pip install 'acryl-datahub[redshift]'`                    | Redshift source                     |
| [sagemaker](../metadata-ingestion/source_docs/sagemaker.md)                         | `pip install 'acryl-datahub[sagemaker]'`                   | AWS SageMaker source                |
| [snowflake](../metadata-ingestion/source_docs/snowflake.md)                         | `pip install 'acryl-datahub[snowflake]'`                   | Snowflake source                    |
| [snowflake-usage](../metadata-ingestion/source_docs/snowflake.md)                   | `pip install 'acryl-datahub[snowflake-usage]'`             | Snowflake usage statistics source   |
| [sql-profiles](../metadata-ingestion/source_docs/sql_profiles.md)                   | `pip install 'acryl-datahub[sql-profiles]'`                | Data profiles for SQL-based systems |
| [sqlalchemy](../metadata-ingestion/source_docs/sqlalchemy.md)                       | `pip install 'acryl-datahub[sqlalchemy]'`                  | Generic SQLAlchemy source           |
| [superset](../metadata-ingestion/source_docs/superset.md)                           | `pip install 'acryl-datahub[superset]'`                    | Superset source                     |
| [tableau](../metadata-ingestion/source_docs/tableau.md)                             | `pip install 'acryl-datahub[tableau]'`                     | Tableau source                      |
| [trino](../metadata-ingestion/source_docs/trino.md)                                 | `pip install 'acryl-datahub[trino]`                        | Trino source                     |
| [starburst-trino-usage](../metadata-ingestion/source_docs/trino.md)                 | `pip install 'acryl-datahub[starburst-trino-usage]'`       | Starburst Trino usage statistics source   |
| [nifi](../metadata-ingestion/source_docs/nifi.md)                                   | `pip install 'acryl-datahub[nifi]`                         | Nifi source                         |

### Sinks

| Plugin Name                             | Install Command                              | Provides                   |
| --------------------------------------- | -------------------------------------------- | -------------------------- |
| [file](../metadata-ingestion/sink_docs/file.md)             | _included by default_                        | File source and sink       |
| [console](../metadata-ingestion/sink_docs/console.md)       | _included by default_                        | Console sink               |
| [datahub-rest](../metadata-ingestion/sink_docs/datahub.md)  | `pip install 'acryl-datahub[datahub-rest]'`  | DataHub sink over REST API |
| [datahub-kafka](../metadata-ingestion/sink_docs/datahub.md) | `pip install 'acryl-datahub[datahub-kafka]'` | DataHub sink over Kafka    |

These plugins can be mixed and matched as desired. For example:

```shell
pip install 'acryl-datahub[bigquery,datahub-rest]'
```

### Check the active plugins

```shell
datahub check plugins
```

[extra requirements]: https://www.python-ldap.org/en/python-ldap-3.3.0/installing.html#build-prerequisites

## User Guide

The `datahub` cli allows you to do many things, such as quickstarting a DataHub docker instance locally, ingesting metadata from your sources, as well as retrieving and modifying metadata.
Like most command line tools, `--help` is your best friend. Use it to discover the capabilities of the cli and the different commands and sub-commands that are supported.

```console
Usage: datahub [OPTIONS] COMMAND [ARGS]...

Options:
  --debug / --no-debug
  --version             Show the version and exit.
  --help                Show this message and exit.

Commands:
  check      Helper commands for checking various aspects of DataHub.
  delete     Delete metadata from datahub using a single urn or a combination of filters
  docker     Helper commands for setting up and interacting with a local DataHub instance using Docker.
  get        Get metadata for an entity with an optional list of aspects to project
  ingest     Ingest metadata into DataHub.
  init       Configure which datahub instance to connect to
  put        Update a single aspect of an entity
  telemetry  Toggle telemetry.
  version    Print version number and exit.
```

The following top-level commands listed below are here mainly to give the reader a high-level picture of what are the kinds of things you can accomplish with the cli.
We've ordered them roughly in the order we expect you to interact with these commands as you get deeper into the `datahub`-verse.

### docker

The `docker` command allows you to start up a local DataHub instance using `datahub docker quickstart`. You can also check if the docker cluster is healthy using `datahub docker check`.

### ingest

The `ingest` command allows you to ingest metadata from your sources using ingestion configuration files, which we call recipes. The main [ingestion page](../metadata-ingestion/README.md) contains detailed instructions about how you can use the ingest command and perform advanced operations like rolling-back previously ingested metadata through the `rollback` sub-command.

### check

The datahub package is composed of different plugins that allow you to connect to different metadata sources and ingest metadata from them.
The `check` command allows you to check if all plugins are loaded correctly as well as validate an individual MCE-file.

### init

The init command is used to tell `datahub` about where your DataHub instance is located. The CLI will point to localhost DataHub by default.
Running `datahub init` will allow you to customize the datahub instance you are communicating with.

**_Note_**: Provide your GMS instance's host when the prompt asks you for the DataHub host.

Alternatively, you can set the following env variables if you don't want to use a config file

```shell
DATAHUB_SKIP_CONFIG=True
DATAHUB_GMS_HOST=http://localhost:8080
DATAHUB_GMS_TOKEN= # Used for communicating with DataHub Cloud
The env variables take precedence over what is in the config.
```

### telemetry

To help us understand how people are using DataHub, we collect anonymous usage statistics on actions such as command invocations via Google Analytics.
We do not collect private information such as IP addresses, contents of ingestions, or credentials.
The code responsible for collecting and broadcasting these events is open-source and can be found [within our GitHub](https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/telemetry/telemetry.py).

Telemetry is enabled by default, and the `telemetry` command lets you toggle the sending of these statistics via `telemetry enable/disable`.
You can also disable telemetry by setting `DATAHUB_TELEMETRY_ENABLED` to `false`.

### delete

The `delete` command allows you to delete metadata from DataHub. Read this [guide](./how/delete-metadata.md) to understand how you can delete metadata from DataHub.

```console
datahub delete --urn "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)" --soft
```

### get

The `get` command allows you to easily retrieve metadata from DataHub, by using the REST API.
For example the following command gets the ownership aspect from the dataset `urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)`

```console
datahub get --urn "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)" --aspect ownership | jq                                                                       put_command
{
  "value": {
    "com.linkedin.metadata.snapshot.DatasetSnapshot": {
      "aspects": [
        {
          "com.linkedin.metadata.key.DatasetKey": {
            "name": "SampleHiveDataset",
            "origin": "PROD",
            "platform": "urn:li:dataPlatform:hive"
          }
        },
        {
          "com.linkedin.common.Ownership": {
            "lastModified": {
              "actor": "urn:li:corpuser:jdoe",
              "time": 1581407189000
            },
            "owners": [
              {
                "owner": "urn:li:corpuser:jdoe",
                "type": "DATAOWNER"
              },
              {
                "owner": "urn:li:corpuser:datahub",
                "type": "DATAOWNER"
              }
            ]
          }
        }
      ],
      "urn": "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)"
    }
  }
}
```

### put

The `put` command allows you to write metadata into DataHub. This is a flexible way for you to issue edits to metadata from the command line.
For example, the following command instructs `datahub` to set the `ownership` aspect of the dataset `urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)` to the value in the file `ownership.json`.
The JSON in the `ownership.json` file needs to conform to the [`Ownership`](https://github.com/linkedin/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/common/Ownership.pdl) Aspect model as shown below.

```json
{
  "owners": [
    {
      "owner": "urn:li:corpuser:jdoe",
      "type": "DEVELOPER"
    },
    {
      "owner": "urn:li:corpuser:jdub",
      "type": "DATAOWNER"
    }
  ]
}
```

```console
datahub --debug put --urn "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)" --aspect ownership -d ownership.json

[DATE_TIMESTAMP] DEBUG    {datahub.cli.cli_utils:340} - Attempting to emit to DataHub GMS; using curl equivalent to:
curl -X POST -H 'User-Agent: python-requests/2.26.0' -H 'Accept-Encoding: gzip, deflate' -H 'Accept: */*' -H 'Connection: keep-alive' -H 'X-RestLi-Protocol-Version: 2.0.0' -H 'Content-Type: application/json' --data '{"proposal": {"entityType": "dataset", "entityUrn": "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)", "aspectName": "ownership", "changeType": "UPSERT", "aspect": {"contentType": "application/json", "value": "{\"owners\": [{\"owner\": \"urn:li:corpuser:jdoe\", \"type\": \"DEVELOPER\"}, {\"owner\": \"urn:li:corpuser:jdub\", \"type\": \"DATAOWNER\"}]}"}}}' 'http://localhost:8080/aspects/?action=ingestProposal'
Update succeeded with status 200
```

### migrate

The `migrate` group of commands allows you to perform certain kinds of migrations. 

#### dataplatform2instance

The `dataplatform2instance` migration command allows you to migrate your entities from an instance-agnostic platform identifier to an instance-specific platform identifier. If you have ingested metadata in the past for this platform and would like to transfer any important metadata over to the new instance-specific entities, then you should use this command. For example, if your users have added documentation or added tags or terms to your datasets, then you should run this command to transfer this metadata over to the new entities. For further context, read the Platform Instance Guide [here](./platform-instances.md).

A few important options worth calling out:
- --dry-run / -n : Use this to get a report for what will be migrated before running
- --force / -F : Use this if you know what you are doing and do not want to get a confirmation prompt before migration is started
- --keep : When enabled, will preserve the old entities and not delete them. Default behavior is to soft-delete old entities.
- --hard : When enabled, will hard-delete the old entities.

**_Note_**: Timeseries aspects such as Usage Statistics and Dataset Profiles are not migrated over to the new entity instances, you will get new data points created when you re-run ingestion using the `usage` or sources with profiling turned on.

##### Dry Run
```console
datahub migrate dataplatform2instance --platform elasticsearch --instance prod_index --dry-run
Starting migration: platform:elasticsearch, instance=prod_index, force=False, dry-run=True
100% (25 of 25) |####################################################################################################################################################################################| Elapsed Time: 0:00:00 Time:  0:00:00
[Dry Run] Migration Report:
--------------
[Dry Run] Migration Run Id: migrate-5710349c-1ec7-4b83-a7d3-47d71b7e972e
[Dry Run] Num entities created = 25
[Dry Run] Num entities affected = 0
[Dry Run] Num entities migrated = 25
[Dry Run] Details:
[Dry Run] New Entities Created: {'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.datahubretentionindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.schemafieldindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.system_metadata_service_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.tagindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.dataset_datasetprofileaspect_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.mlmodelindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.mlfeaturetableindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.datajob_datahubingestioncheckpointaspect_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.datahub_usage_event,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.dataset_operationaspect_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.datajobindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.dataprocessindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.glossarytermindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.dataplatformindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.mlmodeldeploymentindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.datajob_datahubingestionrunsummaryaspect_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.graph_service_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.datahubpolicyindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.dataset_datasetusagestatisticsaspect_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.dashboardindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.glossarynodeindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.mlfeatureindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.dataflowindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.mlprimarykeyindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.chartindex_v2,PROD)'}
[Dry Run] External Entities Affected: None
[Dry Run] Old Entities Migrated = {'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,dataset_datasetusagestatisticsaspect_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,mlmodelindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,mlmodeldeploymentindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,datajob_datahubingestionrunsummaryaspect_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,datahubretentionindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,datahubpolicyindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,dataset_datasetprofileaspect_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,glossarynodeindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,dataset_operationaspect_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,graph_service_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,datajobindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,mlprimarykeyindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,dashboardindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,datajob_datahubingestioncheckpointaspect_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,tagindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,datahub_usage_event,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,schemafieldindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,mlfeatureindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,dataprocessindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,dataplatformindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,mlfeaturetableindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,glossarytermindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,dataflowindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,chartindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,system_metadata_service_v1,PROD)'}
```

##### Real Migration (with soft-delete)
```
> datahub migrate dataplatform2instance --platform hive --instance 
datahub migrate dataplatform2instance --platform hive --instance warehouse
Starting migration: platform:hive, instance=warehouse, force=False, dry-run=False
Will migrate 4 urns such as ['urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,logging_events,PROD)']
New urns will look like ['urn:li:dataset:(urn:li:dataPlatform:hive,warehouse.logging_events,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,warehouse.fct_users_created,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,warehouse.SampleHiveDataset,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,warehouse.fct_users_deleted,PROD)']

Ok to proceed? [y/N]:
...
Migration Report:
--------------
Migration Run Id: migrate-f5ae7201-4548-4bee-aed4-35758bb78c89
Num entities created = 4
Num entities affected = 0
Num entities migrated = 4
Details:
New Entities Created: {'urn:li:dataset:(urn:li:dataPlatform:hive,warehouse.SampleHiveDataset,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,warehouse.fct_users_deleted,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,warehouse.logging_events,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,warehouse.fct_users_created,PROD)'}
External Entities Affected: None
Old Entities Migrated = {'urn:li:dataset:(urn:li:dataPlatform:hive,logging_events,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)'}
```
