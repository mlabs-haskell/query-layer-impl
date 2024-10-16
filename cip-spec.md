
## Utxos

### Asset

Get all UTxOs that contain some of the specified asset

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_utxos_asset)

#### Request


<details>
<summary>Show Example: </summary>

```
{
  "asset_name": "333333333333",
  "minting_policy_hash": "33333333333333333333333333333333333333333333333333333333"
}
```
</details>

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "utxos": [
    {
      "input": {
        "transaction_id": "3333333333333333333333333333333333333333333333333333333333333333",
        "index": 858993459
      },
      "output": {
        "address": "stake177stake177",
        "amount": {
          "coin": "0000000000"
        },
        "script_ref": {
          "tag": "plutus_script",
          "value": {
            "language": "plutus_v1/plutus_v1",
            "bytes": "333333333333"
          }
        }
      }
    }
  ]
}
```
</details>

### Transaction Hash

Get all UTxOs produced by the transaction

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_utxos_transaction_hash)

#### Request


<details>
<summary>Show Example: </summary>

```
"3333333333333333333333333333333333333333333333333333333333333333"
```
</details>

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "utxos": [
    {
      "input": {
        "transaction_id": "3333333333333333333333333333333333333333333333333333333333333333",
        "index": 858993459
      },
      "output": {
        "address": "stake177stake177",
        "amount": {
          "coin": "0000000000"
        },
        "script_ref": {
          "tag": "plutus_script",
          "value": {
            "language": "plutus_v1/plutus_v1",
            "bytes": "333333333333"
          }
        }
      }
    }
  ]
}
```
</details>

### Address

Get all UTxOs present at the address

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_utxos_address)

#### Request


<details>
<summary>Show Example: </summary>

```
"stake177stake177"
```
</details>

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "utxos": [
    {
      "input": {
        "transaction_id": "3333333333333333333333333333333333333333333333333333333333333333",
        "index": 858993459
      },
      "output": {
        "address": "stake177stake177",
        "amount": {
          "coin": "0000000000"
        },
        "script_ref": {
          "tag": "plutus_script",
          "value": {
            "language": "plutus_v1/plutus_v1",
            "bytes": "333333333333"
          }
        }
      }
    }
  ]
}
```
</details>

### Payment Credential

Get all UTxOs present at the addresses which use the payment credential

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_utxos_payment_credential)

#### Request


<details>
<summary>Show Example: </summary>

```
{
  "tag": "pubkey_hash",
  "value": "33333333333333333333333333333333333333333333333333333333"
}
```
</details>

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "utxos": [
    {
      "input": {
        "transaction_id": "3333333333333333333333333333333333333333333333333333333333333333",
        "index": 858993459
      },
      "output": {
        "address": "stake177stake177",
        "amount": {
          "coin": "0000000000"
        },
        "script_ref": {
          "tag": "plutus_script",
          "value": {
            "language": "plutus_v1/plutus_v1",
            "bytes": "333333333333"
          }
        }
      }
    }
  ]
}
```
</details>

### Stake Credential

Get all UTxOs present at the addresses which use the stake credential

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_utxos_stake_credential)

#### Request


<details>
<summary>Show Example: </summary>

```
"stake177stake177"
```
</details>

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "utxos": [
    {
      "input": {
        "transaction_id": "3333333333333333333333333333333333333333333333333333333333333333",
        "index": 858993459
      },
      "output": {
        "address": "stake177stake177",
        "amount": {
          "coin": "0000000000"
        },
        "script_ref": {
          "tag": "plutus_script",
          "value": {
            "language": "plutus_v1/plutus_v1",
            "bytes": "333333333333"
          }
        }
      }
    }
  ]
}
```
</details>

## Block

### Number

Get the block with the supplied block number

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_block_number)

#### Request


<details>
<summary>Show Example: </summary>

```
{
  "block_number": "0000000000"
}
```
</details>

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "block": {
    "auxiliary_data_set": {},
    "header": {
      "body_signature": "33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
      "header_body": {
        "block_number": 858993459,
        "slot": "0000000000",
        "prev_hash": "3333333333333333333333333333333333333333333333333333333333333333",
        "issuer_vkey": "3333333333333333333333333333333333333333333333333333333333333333",
        "vrf_vkey": "3333333333333333333333333333333333333333333333333333333333333333",
        "vrf_result": {
          "output": "333333333333",
          "proof": "333333333333"
        },
        "block_body_size": 858993459,
        "block_body_hash": "3333333333333333333333333333333333333333333333333333333333333333",
        "operational_cert": {
          "hot_vkey": "3333333333333333333333333333333333333333333333333333333333333333",
          "kes_period": 858993459,
          "sequence_number": 858993459,
          "sigma": "33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"
        },
        "protocol_version": {
          "major": 858993459,
          "minor": 858993459
        }
      }
    },
    "invalid_transactions": [
      858993459
    ],
    "transaction_bodies": [
      {
        "auxiliary_data_hash": "3333333333333333333333333333333333333333333333333333333333333333",
        "inputs": [
          {
            "transaction_id": "3333333333333333333333333333333333333333333333333333333333333333",
            "index": 858993459
          }
        ],
        "outputs": [
          {
            "address": "stake177stake177",
            "amount": {
              "coin": "0000000000"
            },
            "script_ref": {
              "tag": "plutus_script",
              "value": {
                "language": "plutus_v1/plutus_v1",
                "bytes": "333333333333"
              }
            }
          }
        ],
        "fee": "0000000000",
        "mint": [
          {
            "script_hash": "33333333333333333333333333333333333333333333333333333333",
            "assets": [
              {
                "asset_name": "333333333333",
                "amount": "222222222222"
              }
            ]
          }
        ],
        "total_collateral": "0000000000",
        "voting_procedures": [
          {
            "key": {
              "tag": "cc_credential",
              "credential": {
                "tag": "pubkey_hash",
                "value": "33333333333333333333333333333333333333333333333333333333"
              }
            },
            "value": [
              {
                "key": {
                  "transaction_id": "3333333333333333333333333333333333333333333333333333333333333333",
                  "gov_action_index": "0000000000"
                },
                "value": {
                  "vote": "yes/yes/yes/yes"
                }
              }
            ]
          }
        ]
      }
    ],
    "transaction_witness_sets": [
      {
        "Utc": -60000000,
        "redeemers": [
          {
            "data": {
              "Utc": -60000000,
              "alternative": "0000000000"
            },
            "tag": "mint/mint/mint/mint",
            "index": "0000000000",
            "ex_units": {
              "mem": "0000000000",
              "steps": "0000000000"
            }
          }
        ]
      }
    ]
  }
}
```
</details>

### Hash

Get the block with the supplied block hash

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_block_hash)

#### Request


<details>
<summary>Show Example: </summary>

```
"3333333333333333333333333333333333333333333333333333333333333333"
```
</details>

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "block": {
    "auxiliary_data_set": {},
    "header": {
      "body_signature": "33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
      "header_body": {
        "block_number": 858993459,
        "slot": "0000000000",
        "prev_hash": "3333333333333333333333333333333333333333333333333333333333333333",
        "issuer_vkey": "3333333333333333333333333333333333333333333333333333333333333333",
        "vrf_vkey": "3333333333333333333333333333333333333333333333333333333333333333",
        "vrf_result": {
          "output": "333333333333",
          "proof": "333333333333"
        },
        "block_body_size": 858993459,
        "block_body_hash": "3333333333333333333333333333333333333333333333333333333333333333",
        "operational_cert": {
          "hot_vkey": "3333333333333333333333333333333333333333333333333333333333333333",
          "kes_period": 858993459,
          "sequence_number": 858993459,
          "sigma": "33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"
        },
        "protocol_version": {
          "major": 858993459,
          "minor": 858993459
        }
      }
    },
    "invalid_transactions": [
      858993459
    ],
    "transaction_bodies": [
      {
        "auxiliary_data_hash": "3333333333333333333333333333333333333333333333333333333333333333",
        "inputs": [
          {
            "transaction_id": "3333333333333333333333333333333333333333333333333333333333333333",
            "index": 858993459
          }
        ],
        "outputs": [
          {
            "address": "stake177stake177",
            "amount": {
              "coin": "0000000000"
            },
            "script_ref": {
              "tag": "plutus_script",
              "value": {
                "language": "plutus_v1/plutus_v1",
                "bytes": "333333333333"
              }
            }
          }
        ],
        "fee": "0000000000",
        "mint": [
          {
            "script_hash": "33333333333333333333333333333333333333333333333333333333",
            "assets": [
              {
                "asset_name": "333333333333",
                "amount": "222222222222"
              }
            ]
          }
        ],
        "total_collateral": "0000000000",
        "voting_procedures": [
          {
            "key": {
              "tag": "cc_credential",
              "credential": {
                "tag": "pubkey_hash",
                "value": "33333333333333333333333333333333333333333333333333333333"
              }
            },
            "value": [
              {
                "key": {
                  "transaction_id": "3333333333333333333333333333333333333333333333333333333333333333",
                  "gov_action_index": "0000000000"
                },
                "value": {
                  "vote": "yes/yes/yes/yes"
                }
              }
            ]
          }
        ]
      }
    ],
    "transaction_witness_sets": [
      {
        "Utc": -60000000,
        "redeemers": [
          {
            "data": {
              "Utc": -60000000,
              "alternative": "0000000000"
            },
            "tag": "mint/mint/mint/mint",
            "index": "0000000000",
            "ex_units": {
              "mem": "0000000000",
              "steps": "0000000000"
            }
          }
        ]
      }
    ]
  }
}
```
</details>

## Transaction

### Hash

Get the transaction with the supplied transaction hash

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_transaction_hash)

#### Request


<details>
<summary>Show Example: </summary>

```
"3333333333333333333333333333333333333333333333333333333333333333"
```
</details>

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "auxiliary_data": {},
  "body": {
    "auxiliary_data_hash": "3333333333333333333333333333333333333333333333333333333333333333",
    "inputs": [
      {
        "transaction_id": "3333333333333333333333333333333333333333333333333333333333333333",
        "index": 858993459
      }
    ],
    "outputs": [
      {
        "address": "stake177stake177",
        "amount": {
          "coin": "0000000000"
        },
        "script_ref": {
          "tag": "plutus_script",
          "value": {
            "language": "plutus_v1/plutus_v1",
            "bytes": "333333333333"
          }
        }
      }
    ],
    "fee": "0000000000",
    "mint": [
      {
        "script_hash": "33333333333333333333333333333333333333333333333333333333",
        "assets": [
          {
            "asset_name": "333333333333",
            "amount": "222222222222"
          }
        ]
      }
    ],
    "total_collateral": "0000000000",
    "voting_procedures": [
      {
        "key": {
          "tag": "cc_credential",
          "credential": {
            "tag": "pubkey_hash",
            "value": "33333333333333333333333333333333333333333333333333333333"
          }
        },
        "value": [
          {
            "key": {
              "transaction_id": "3333333333333333333333333333333333333333333333333333333333333333",
              "gov_action_index": "0000000000"
            },
            "value": {
              "vote": "yes/yes/yes/yes"
            }
          }
        ]
      }
    ]
  },
  "is_valid": false,
  "witness_set": {
    "Utc": -60000000,
    "redeemers": [
      {
        "data": {
          "Utc": -60000000,
          "alternative": "0000000000"
        },
        "tag": "mint/mint/mint/mint",
        "index": "0000000000",
        "ex_units": {
          "mem": "0000000000",
          "steps": "0000000000"
        }
      }
    ]
  }
}
```
</details>

## Transactions

### Block Number

Get all transactions contained in the block with the supplied block number []

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_transactions_block_number)

#### Request


<details>
<summary>Show Example: </summary>

```
{
  "block_number": "0000000000"
}
```
</details>

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "transactions": [
    {
      "body": {
        "auxiliary_data_hash": "3333333333333333333333333333333333333333333333333333333333333333",
        "inputs": [
          {
            "transaction_id": "3333333333333333333333333333333333333333333333333333333333333333",
            "index": 858993459
          }
        ],
        "outputs": [
          {
            "address": "stake177stake177",
            "amount": {
              "coin": "0000000000"
            },
            "script_ref": {
              "tag": "plutus_script",
              "value": {
                "language": "plutus_v1/plutus_v1",
                "bytes": "333333333333"
              }
            }
          }
        ],
        "fee": "0000000000",
        "mint": [
          {
            "script_hash": "33333333333333333333333333333333333333333333333333333333",
            "assets": [
              {
                "asset_name": "333333333333",
                "amount": "222222222222"
              }
            ]
          }
        ],
        "total_collateral": "0000000000",
        "voting_procedures": [
          {
            "key": {
              "tag": "cc_credential",
              "credential": {
                "tag": "pubkey_hash",
                "value": "33333333333333333333333333333333333333333333333333333333"
              }
            },
            "value": [
              {
                "key": {
                  "transaction_id": "3333333333333333333333333333333333333333333333333333333333333333",
                  "gov_action_index": "0000000000"
                },
                "value": {
                  "vote": "yes/yes/yes/yes"
                }
              }
            ]
          }
        ]
      },
      "is_valid": false,
      "witness_set": {
        "Utc": -60000000,
        "redeemers": [
          {
            "data": {
              "Utc": -60000000,
              "alternative": "0000000000"
            },
            "tag": "mint/mint/mint/mint",
            "index": "0000000000",
            "ex_units": {
              "mem": "0000000000",
              "steps": "0000000000"
            }
          }
        ]
      }
    }
  ]
}
```
</details>

### Block Hash

Get all transactions contained in the block with the supplied block hash

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_transactions_block_hash)

#### Request


<details>
<summary>Show Example: </summary>

```
"3333333333333333333333333333333333333333333333333333333333333333"
```
</details>

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "transactions": [
    {
      "body": {
        "auxiliary_data_hash": "3333333333333333333333333333333333333333333333333333333333333333",
        "inputs": [
          {
            "transaction_id": "3333333333333333333333333333333333333333333333333333333333333333",
            "index": 858993459
          }
        ],
        "outputs": [
          {
            "address": "stake177stake177",
            "amount": {
              "coin": "0000000000"
            },
            "script_ref": {
              "tag": "plutus_script",
              "value": {
                "language": "plutus_v1/plutus_v1",
                "bytes": "333333333333"
              }
            }
          }
        ],
        "fee": "0000000000",
        "mint": [
          {
            "script_hash": "33333333333333333333333333333333333333333333333333333333",
            "assets": [
              {
                "asset_name": "333333333333",
                "amount": "222222222222"
              }
            ]
          }
        ],
        "total_collateral": "0000000000",
        "voting_procedures": [
          {
            "key": {
              "tag": "cc_credential",
              "credential": {
                "tag": "pubkey_hash",
                "value": "33333333333333333333333333333333333333333333333333333333"
              }
            },
            "value": [
              {
                "key": {
                  "transaction_id": "3333333333333333333333333333333333333333333333333333333333333333",
                  "gov_action_index": "0000000000"
                },
                "value": {
                  "vote": "yes/yes/yes/yes"
                }
              }
            ]
          }
        ]
      },
      "is_valid": false,
      "witness_set": {
        "Utc": -60000000,
        "redeemers": [
          {
            "data": {
              "Utc": -60000000,
              "alternative": "0000000000"
            },
            "tag": "mint/mint/mint/mint",
            "index": "0000000000",
            "ex_units": {
              "mem": "0000000000",
              "steps": "0000000000"
            }
          }
        ]
      }
    }
  ]
}
```
</details>

## Datum

### Hash

Get the datum that hashes to the supplied data hash

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_datum_hash)

#### Request


<details>
<summary>Show Example: </summary>

```
"3333333333333333333333333333333333333333333333333333333333333333"
```
</details>

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "datum": {
    "Utc": -60000000,
    "alternative": "0000000000"
  }
}
```
</details>

## Plutus Script

### Hash

Get the plutus script that hashes to the supplied script hash

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_plutus_script_hash)

#### Request


<details>
<summary>Show Example: </summary>

```
"33333333333333333333333333333333333333333333333333333333"
```
</details>

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "plutus_script": {
    "language": "plutus_v1/plutus_v1",
    "bytes": "333333333333"
  }
}
```
</details>

## Native Script

### Hash

Get the native script that hashes to the supplied script hash

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_native_script_hash)

#### Request


<details>
<summary>Show Example: </summary>

```
"33333333333333333333333333333333333333333333333333333333"
```
</details>

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "native_script": {
    "tag": "all/all/all/all",
    "scripts": [
      {
        "tag": "all/all/all/all",
        "scripts": [
          {
            "tag": "all/all/all/all",
            "scripts": [
              {
                "tag": "all/all/all/all",
                "scripts": []
              }
            ]
          }
        ]
      }
    ]
  }
}
```
</details>

## Metadata

### Transaction Hash

Get the metadata present on the transaction with the supplied transaction hash

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_metadata_transaction_hash)

#### Request


<details>
<summary>Show Example: </summary>

```
"3333333333333333333333333333333333333333333333333333333333333333"
```
</details>

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "tag": "map",
  "contents": [
    {
      "key": {
        "tag": "list",
        "contents": [
          {
            "tag": "list",
            "contents": [
              {
                "tag": "list",
                "contents": []
              }
            ]
          }
        ]
      },
      "value": {
        "tag": "list",
        "contents": [
          {
            "tag": "list",
            "contents": [
              {
                "tag": "list",
                "contents": []
              }
            ]
          }
        ]
      }
    }
  ]
}
```
</details>

## Protocol Parameters

### Latest

Get the latest protocol parameters

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_protocol_parameters_latest)

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "ada_per_utxo_byte": "0000000000",
  "collateral_percentage": 858993459,
  "cost_models": {
    "Utc": -60000000,
    "plutus_v2": [
      "0000000000",
      "0000000000"
    ]
  },
  "d": {
    "numerator": "0000000000",
    "denominator": "0000000000"
  },
  "execution_costs": {
    "mem_price": {
      "numerator": "0000000000",
      "denominator": "0000000000"
    },
    "step_price": {
      "numerator": "0000000000",
      "denominator": "0000000000"
    }
  },
  "expansion_rate": {
    "numerator": "0000000000",
    "denominator": "0000000000"
  },
  "key_deposit": "0000000000",
  "max_block_body_size": 858993459,
  "max_block_ex_units": {
    "mem": "0000000000",
    "steps": "0000000000"
  },
  "max_block_header_size": 858993459,
  "max_collateral_inputs": 858993459,
  "max_epoch": 858993459,
  "max_tx_ex_units": {
    "mem": "0000000000",
    "steps": "0000000000"
  },
  "max_tx_size": 858993459,
  "max_value_size": 858993459,
  "min_pool_cost": "0000000000",
  "minfee_a": "0000000000",
  "minfee_b": "0000000000",
  "n_opt": "0000000000",
  "pool_deposit": "0000000000",
  "pool_pledge_influence": {
    "numerator": "0000000000",
    "denominator": "0000000000"
  },
  "protocol_version": {
    "major": 858993459,
    "minor": 858993459
  },
  "treasury_growth_rate": {
    "numerator": "0000000000",
    "denominator": "0000000000"
  },
  "pool_voting_thresholds": [
    {
      "numerator": "0000000000",
      "denominator": "0000000000"
    },
    {
      "numerator": "0000000000",
      "denominator": "0000000000"
    }
  ],
  "drep_voting_thresholds": [
    {
      "numerator": "0000000000",
      "denominator": "0000000000"
    },
    {
      "numerator": "0000000000",
      "denominator": "0000000000"
    }
  ],
  "committee_min_size": "0000000000",
  "committee_max_term_length": 858993459,
  "gov_action_lifetime": 858993459,
  "gov_action_deposit": "0000000000",
  "drep_deposit": "0000000000",
  "drep_activity": 858993459,
  "min_fee_ref_script_cost_per_byte": {
    "numerator": "0000000000",
    "denominator": "222222222222"
  }
}
```
</details>

### Epoch

Get the protocol parameters at the supplied epoch number

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_protocol_parameters_epoch)

#### Request


<details>
<summary>Show Example: </summary>

```
{
  "epoch_number": 858993459
}
```
</details>

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "ada_per_utxo_byte": "0000000000",
  "collateral_percentage": 858993459,
  "cost_models": {
    "Utc": -60000000,
    "plutus_v2": [
      "0000000000",
      "0000000000"
    ]
  },
  "d": {
    "numerator": "0000000000",
    "denominator": "0000000000"
  },
  "execution_costs": {
    "mem_price": {
      "numerator": "0000000000",
      "denominator": "0000000000"
    },
    "step_price": {
      "numerator": "0000000000",
      "denominator": "0000000000"
    }
  },
  "expansion_rate": {
    "numerator": "0000000000",
    "denominator": "0000000000"
  },
  "key_deposit": "0000000000",
  "max_block_body_size": 858993459,
  "max_block_ex_units": {
    "mem": "0000000000",
    "steps": "0000000000"
  },
  "max_block_header_size": 858993459,
  "max_collateral_inputs": 858993459,
  "max_epoch": 858993459,
  "max_tx_ex_units": {
    "mem": "0000000000",
    "steps": "0000000000"
  },
  "max_tx_size": 858993459,
  "max_value_size": 858993459,
  "min_pool_cost": "0000000000",
  "minfee_a": "0000000000",
  "minfee_b": "0000000000",
  "n_opt": "0000000000",
  "pool_deposit": "0000000000",
  "pool_pledge_influence": {
    "numerator": "0000000000",
    "denominator": "0000000000"
  },
  "protocol_version": {
    "major": 858993459,
    "minor": 858993459
  },
  "treasury_growth_rate": {
    "numerator": "0000000000",
    "denominator": "0000000000"
  },
  "pool_voting_thresholds": [
    {
      "numerator": "0000000000",
      "denominator": "0000000000"
    },
    {
      "numerator": "0000000000",
      "denominator": "0000000000"
    }
  ],
  "drep_voting_thresholds": [
    {
      "numerator": "0000000000",
      "denominator": "0000000000"
    },
    {
      "numerator": "0000000000",
      "denominator": "0000000000"
    }
  ],
  "committee_min_size": "0000000000",
  "committee_max_term_length": 858993459,
  "gov_action_lifetime": 858993459,
  "gov_action_deposit": "0000000000",
  "drep_deposit": "0000000000",
  "drep_activity": 858993459,
  "min_fee_ref_script_cost_per_byte": {
    "numerator": "0000000000",
    "denominator": "222222222222"
  }
}
```
</details>

## Votes

### Cc Id

Votes cast by the supplied cc credential

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_votes_cc_id)

#### Request


<details>
<summary>Show Example: </summary>

```
"cc_hot177cc_hot177"
```
</details>

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "votes": [
    {
      "proposal_id": "gov_action177",
      "vote_tx_hash": "3333333333333333333333333333333333333333333333333333333333333333",
      "vote": "yes/yes/yes/yes"
    }
  ]
}
```
</details>

### Spo Id

Votes cast by the supplied stake pool operator

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_votes_spo_id)

#### Request


<details>
<summary>Show Example: </summary>

```
"pool177pool177"
```
</details>

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "votes": [
    {
      "proposal_id": "gov_action177",
      "vote_tx_hash": "3333333333333333333333333333333333333333333333333333333333333333",
      "vote": "yes/yes/yes/yes"
    }
  ]
}
```
</details>

### Drep Id

Votes cast by the supplied DRep

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_votes_drep_id)

#### Request


<details>
<summary>Show Example: </summary>

```
"drep177drep177"
```
</details>

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "votes": [
    {
      "proposal_id": "gov_action177",
      "vote_tx_hash": "3333333333333333333333333333333333333333333333333333333333333333",
      "vote": "yes/yes/yes/yes"
    }
  ]
}
```
</details>

### Proposal Id

Votes cast on the supplied proposal

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_votes_proposal_id)

#### Request


<details>
<summary>Show Example: </summary>

```
"gov_action177"
```
</details>

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "votes": [
    {
      "proposal_id": "gov_action177",
      "vote_tx_hash": "3333333333333333333333333333333333333333333333333333333333333333",
      "vote": "yes/yes/yes/yes"
    }
  ]
}
```
</details>

## Drep

### All

Get all the known DReps

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_drep_all)

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "dreps": [
    {
      "drep_id": "drep177drep177",
      "amount": "222222222222",
      "active": false
    }
  ]
}
```
</details>

### Id

Get a specific Drep by id

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_drep_id)

#### Request


<details>
<summary>Show Example: </summary>

```
"drep177drep177"
```
</details>

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "drep_id": "drep177drep177",
  "amount": "222222222222",
  "active": false
}
```
</details>

## Committee

### All

Get all known committee members

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_committee_all)

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "cc_members": [
    {
      "cc_cold_key": "cc_cold177",
      "cc_hot_key": "cc_hot177cc_hot177",
      "status": "authorised"
    }
  ]
}
```
</details>

### Id

Get a specific Committee member by id

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_committee_id)

#### Request


<details>
<summary>Show Example: </summary>

```
"cc_hot177cc_hot177"
```
</details>

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "cc_cold_key": "cc_cold177",
  "cc_hot_key": "cc_hot177cc_hot177",
  "status": "authorised"
}
```
</details>

## Pool

### All

Get all known stake pools

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_pool_all)

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "pools": [
    {
      "pool_id": "pool177pool177",
      "status": "active/active",
      "active_stake": "0000000000",
      "live_stake": "0000000000"
    }
  ]
}
```
</details>

### Id

Get a specific stake pool by id

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_pool_id)

#### Request


<details>
<summary>Show Example: </summary>

```
"pool177pool177"
```
</details>

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "pool_id": "pool177pool177",
  "status": "active/active",
  "active_stake": "0000000000",
  "live_stake": "0000000000"
}
```
</details>

## Proposal

### All

Get all known proposals

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_proposal_all)

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "aaa": [
    {
      "proposal_id": "gov_action177",
      "enacted_epoch": 858993459
    }
  ]
}
```
</details>

### Id

Get a specific proposal by id

[Link to OpenApi endpoint](https://mlabs-haskell.github.io/query-layer-impl/index.html#/default/get_proposal_id)

#### Request


<details>
<summary>Show Example: </summary>

```
"gov_action177"
```
</details>

#### Response


<details>
<summary>Show Example: </summary>

```
{
  "proposal_id": "gov_action177",
  "enacted_epoch": 858993459
}
```
</details>
