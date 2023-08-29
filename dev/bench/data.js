window.BENCHMARK_DATA = {
  "lastUpdate": 1693300914447,
  "repoUrl": "https://github.com/alexunderch/rl",
  "entries": {
    "CPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "btx0424@outlook.com",
            "name": "btx0424",
            "username": "btx0424"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd316e9abe6e8fcab9513f3120b07ee3c954120a",
          "message": "[BugFix] CompositeSpec.unsqueeze (#1464)",
          "timestamp": "2023-08-18T07:48:04+02:00",
          "tree_id": "e43b04415ec78638a90e3d76df393c859d9d8fee",
          "url": "https://github.com/alexunderch/rl/commit/bd316e9abe6e8fcab9513f3120b07ee3c954120a"
        },
        "date": 1693300850014,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 5.129959977898986,
            "unit": "iter/sec",
            "range": "stddev: 0.0019459433299532833",
            "extra": "mean: 194.93329466666864 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 9.39603116886243,
            "unit": "iter/sec",
            "range": "stddev: 0.00819832648204431",
            "extra": "mean: 106.42791430001921 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 9.600819374059416,
            "unit": "iter/sec",
            "range": "stddev: 0.08727580276591114",
            "extra": "mean: 104.15777664788835 msec\nrounds: 71"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.1151502442749293,
            "unit": "iter/sec",
            "range": "stddev: 0.04530030875640537",
            "extra": "mean: 896.7401524000024 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.42849511094774045,
            "unit": "iter/sec",
            "range": "stddev: 0.09261804968476145",
            "extra": "mean: 2.333748914400007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.3573290503869545,
            "unit": "iter/sec",
            "range": "stddev: 0.10455082576901867",
            "extra": "mean: 2.798541005599998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4358976511481659,
            "unit": "iter/sec",
            "range": "stddev: 0.08838390042626089",
            "extra": "mean: 2.2941165142000046 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-True-True]",
            "value": 18165.070857061877,
            "unit": "iter/sec",
            "range": "stddev: 0.0006586083481823764",
            "extra": "mean: 55.05070736408599 usec\nrounds: 11991"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-True-False]",
            "value": 32370.020188271297,
            "unit": "iter/sec",
            "range": "stddev: 0.00029032832919653875",
            "extra": "mean: 30.892782710167488 usec\nrounds: 19306"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-False-True]",
            "value": 23775.931660748895,
            "unit": "iter/sec",
            "range": "stddev: 0.0002935285288717391",
            "extra": "mean: 42.05934027186306 usec\nrounds: 17007"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-False-False]",
            "value": 29308.380706221884,
            "unit": "iter/sec",
            "range": "stddev: 0.0005565379063183102",
            "extra": "mean: 34.11993347649227 usec\nrounds: 27028"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-True-True]",
            "value": 16678.807398352164,
            "unit": "iter/sec",
            "range": "stddev: 0.00008404437561633504",
            "extra": "mean: 59.95632518058805 usec\nrounds: 9690"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-True-False]",
            "value": 29066.294322928337,
            "unit": "iter/sec",
            "range": "stddev: 0.00006387621306777068",
            "extra": "mean: 34.40411044111568 usec\nrounds: 16751"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-False-True]",
            "value": 23070.575229882958,
            "unit": "iter/sec",
            "range": "stddev: 0.00001650112125066968",
            "extra": "mean: 43.34525645917643 usec\nrounds: 14205"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-False-False]",
            "value": 40210.23297633501,
            "unit": "iter/sec",
            "range": "stddev: 0.000009218946802723185",
            "extra": "mean: 24.869291371391242 usec\nrounds: 19343"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-True-True]",
            "value": 16317.926064471842,
            "unit": "iter/sec",
            "range": "stddev: 0.00003119367561794149",
            "extra": "mean: 61.28229752047027 usec\nrounds: 6897"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-True-False]",
            "value": 27244.979263700905,
            "unit": "iter/sec",
            "range": "stddev: 0.000012329051355096462",
            "extra": "mean: 36.704010317685295 usec\nrounds: 15798"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-False-True]",
            "value": 23168.84770263961,
            "unit": "iter/sec",
            "range": "stddev: 0.000021669597670599696",
            "extra": "mean: 43.161404176612145 usec\nrounds: 13551"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-False-False]",
            "value": 40448.247884207696,
            "unit": "iter/sec",
            "range": "stddev: 0.00000994246297683952",
            "extra": "mean: 24.722949752056685 usec\nrounds: 19961"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-True-True]",
            "value": 16118.593676287035,
            "unit": "iter/sec",
            "range": "stddev: 0.000048588058331048226",
            "extra": "mean: 62.040151894340255 usec\nrounds: 11508"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-True-False]",
            "value": 25635.80764375256,
            "unit": "iter/sec",
            "range": "stddev: 0.000021741688157044973",
            "extra": "mean: 39.007938189288915 usec\nrounds: 16502"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-False-True]",
            "value": 22089.69740838336,
            "unit": "iter/sec",
            "range": "stddev: 0.000032579675353092244",
            "extra": "mean: 45.2699727620753 usec\nrounds: 15016"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-False-False]",
            "value": 36157.995127635746,
            "unit": "iter/sec",
            "range": "stddev: 0.000022286783561507975",
            "extra": "mean: 27.65640065136506 usec\nrounds: 18727"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-True-True]",
            "value": 16650.790469216754,
            "unit": "iter/sec",
            "range": "stddev: 0.000018794783224115023",
            "extra": "mean: 60.05720880631799 usec\nrounds: 11628"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-True-False]",
            "value": 26564.527268731177,
            "unit": "iter/sec",
            "range": "stddev: 0.00004179092838991669",
            "extra": "mean: 37.64418579272402 usec\nrounds: 16949"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-False-True]",
            "value": 20078.001611363547,
            "unit": "iter/sec",
            "range": "stddev: 0.000024470723919862374",
            "extra": "mean: 49.80575354840245 usec\nrounds: 12611"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-False-False]",
            "value": 34138.40186168956,
            "unit": "iter/sec",
            "range": "stddev: 0.000024980863024679273",
            "extra": "mean: 29.292525293113076 usec\nrounds: 16052"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-True-True]",
            "value": 15841.663000703098,
            "unit": "iter/sec",
            "range": "stddev: 0.00007722599524087515",
            "extra": "mean: 63.12468583352753 usec\nrounds: 10765"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-True-False]",
            "value": 25782.02071190088,
            "unit": "iter/sec",
            "range": "stddev: 0.000020456018984360794",
            "extra": "mean: 38.78671928684022 usec\nrounds: 7570"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-False-True]",
            "value": 18905.203887743264,
            "unit": "iter/sec",
            "range": "stddev: 0.000017233305109357134",
            "extra": "mean: 52.89548877324333 usec\nrounds: 12871"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-False-False]",
            "value": 32725.081013091654,
            "unit": "iter/sec",
            "range": "stddev: 0.000018703250195919",
            "extra": "mean: 30.557601968959236 usec\nrounds: 13813"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-True-True]",
            "value": 15190.566648138856,
            "unit": "iter/sec",
            "range": "stddev: 0.000033152663570177075",
            "extra": "mean: 65.8303289905594 usec\nrounds: 8827"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-True-False]",
            "value": 24792.546566106892,
            "unit": "iter/sec",
            "range": "stddev: 0.00002819905219996225",
            "extra": "mean: 40.33470290490726 usec\nrounds: 16557"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-False-True]",
            "value": 19213.27400769241,
            "unit": "iter/sec",
            "range": "stddev: 0.000023381565309207108",
            "extra": "mean: 52.04735016008362 usec\nrounds: 7508"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-False-False]",
            "value": 32023.6967671353,
            "unit": "iter/sec",
            "range": "stddev: 0.000025740279837079853",
            "extra": "mean: 31.226875749905986 usec\nrounds: 18833"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-True-True]",
            "value": 14550.934106121756,
            "unit": "iter/sec",
            "range": "stddev: 0.00002220840468113606",
            "extra": "mean: 68.72411026720873 usec\nrounds: 10538"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-True-False]",
            "value": 23064.367680626518,
            "unit": "iter/sec",
            "range": "stddev: 0.00002511881536630651",
            "extra": "mean: 43.35692241153329 usec\nrounds: 15724"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-False-True]",
            "value": 18575.82409684254,
            "unit": "iter/sec",
            "range": "stddev: 0.00002798714346648067",
            "extra": "mean: 53.83341243901942 usec\nrounds: 12300"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-False-False]",
            "value": 31247.38358683615,
            "unit": "iter/sec",
            "range": "stddev: 0.000009999631955505031",
            "extra": "mean: 32.00267943141577 usec\nrounds: 18149"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 53.23409969068694,
            "unit": "iter/sec",
            "range": "stddev: 0.0011821292120765008",
            "extra": "mean: 18.784951860000092 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 13.243605385266248,
            "unit": "iter/sec",
            "range": "stddev: 0.010017914859823507",
            "extra": "mean: 75.50813927999684 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 2439.165266912726,
            "unit": "iter/sec",
            "range": "stddev: 0.00025921642083854304",
            "extra": "mean: 409.9763199997142 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 53.844305106082174,
            "unit": "iter/sec",
            "range": "stddev: 0.0006165953771999401",
            "extra": "mean: 18.572066219999215 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 13.61009572228308,
            "unit": "iter/sec",
            "range": "stddev: 0.002849295763240587",
            "extra": "mean: 73.47486897999943 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 19.625303623661058,
            "unit": "iter/sec",
            "range": "stddev: 0.0017813619709135925",
            "extra": "mean: 50.95462568000016 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 13.44611854381231,
            "unit": "iter/sec",
            "range": "stddev: 0.003689153663498578",
            "extra": "mean: 74.37090463999994 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 63.28075996150079,
            "unit": "iter/sec",
            "range": "stddev: 0.0014780267603592334",
            "extra": "mean: 15.80259150819913 msec\nrounds: 61"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 218.03375365603557,
            "unit": "iter/sec",
            "range": "stddev: 0.0006063841180677866",
            "extra": "mean: 4.586445828830587 msec\nrounds: 111"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 1333.478727705073,
            "unit": "iter/sec",
            "range": "stddev: 0.00026732155655583885",
            "extra": "mean: 749.9182245831605 usec\nrounds: 659"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 13.094077819650531,
            "unit": "iter/sec",
            "range": "stddev: 0.003311521890463532",
            "extra": "mean: 76.37040299999447 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 155.35814223383306,
            "unit": "iter/sec",
            "range": "stddev: 0.0009158600233126715",
            "extra": "mean: 6.436740203129343 msec\nrounds: 128"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_dqn_speed",
            "value": 353.5530370862493,
            "unit": "iter/sec",
            "range": "stddev: 0.0005766774777461507",
            "extra": "mean: 2.8284299528052137 msec\nrounds: 339"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ddpg_speed",
            "value": 205.372368048741,
            "unit": "iter/sec",
            "range": "stddev: 0.0007961927192493518",
            "extra": "mean: 4.869204214281982 msec\nrounds: 196"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_sac_speed",
            "value": 68.96897833252176,
            "unit": "iter/sec",
            "range": "stddev: 0.0013242748717473731",
            "extra": "mean: 14.49927234210541 msec\nrounds: 76"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_speed",
            "value": 36.99430534365588,
            "unit": "iter/sec",
            "range": "stddev: 0.0018404609030078668",
            "extra": "mean: 27.031187387101163 msec\nrounds: 31"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_deprec_speed",
            "value": 42.47967695655361,
            "unit": "iter/sec",
            "range": "stddev: 0.0029929400962355143",
            "extra": "mean: 23.540668659574717 msec\nrounds: 47"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_td3_speed",
            "value": 58.329516992958304,
            "unit": "iter/sec",
            "range": "stddev: 0.0008834965853269874",
            "extra": "mean: 17.143978752999487 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_cql_speed",
            "value": 18.230407787129813,
            "unit": "iter/sec",
            "range": "stddev: 0.004533808625171197",
            "extra": "mean: 54.853408200006015 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_a2c_speed",
            "value": 85.28396095567906,
            "unit": "iter/sec",
            "range": "stddev: 0.0010841890063602608",
            "extra": "mean: 11.725534189478918 msec\nrounds: 95"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ppo_speed",
            "value": 79.85905641034086,
            "unit": "iter/sec",
            "range": "stddev: 0.001547756436669341",
            "extra": "mean: 12.52206130337537 msec\nrounds: 89"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_reinforce_speed",
            "value": 100.63990217371683,
            "unit": "iter/sec",
            "range": "stddev: 0.0013529954041923825",
            "extra": "mean: 9.936416653842501 msec\nrounds: 104"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_iql_speed",
            "value": 20.67222868728652,
            "unit": "iter/sec",
            "range": "stddev: 0.003108269982983373",
            "extra": "mean: 48.37407785716897 msec\nrounds: 21"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 283.3745222206386,
            "unit": "iter/sec",
            "range": "stddev: 0.00044752924075913545",
            "extra": "mean: 3.5288987597176735 msec\nrounds: 283"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 270.6210609923614,
            "unit": "iter/sec",
            "range": "stddev: 0.0004097510266191045",
            "extra": "mean: 3.6952038999958923 msec\nrounds: 290"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 274.663582556569,
            "unit": "iter/sec",
            "range": "stddev: 0.00034063031397972766",
            "extra": "mean: 3.640817580153869 msec\nrounds: 262"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 283.5622930187835,
            "unit": "iter/sec",
            "range": "stddev: 0.0004223415892533992",
            "extra": "mean: 3.526561974633767 msec\nrounds: 276"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 274.16138400188663,
            "unit": "iter/sec",
            "range": "stddev: 0.0002713271644057674",
            "extra": "mean: 3.647486693432794 msec\nrounds: 274"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 264.9528587462354,
            "unit": "iter/sec",
            "range": "stddev: 0.0006207416305790036",
            "extra": "mean: 3.7742563138666587 msec\nrounds: 274"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 286.3724290356648,
            "unit": "iter/sec",
            "range": "stddev: 0.0003676312002076107",
            "extra": "mean: 3.491956273051202 msec\nrounds: 282"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 234.08471786517933,
            "unit": "iter/sec",
            "range": "stddev: 0.00930258715285755",
            "extra": "mean: 4.271957644735903 msec\nrounds: 304"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 240.7044630122416,
            "unit": "iter/sec",
            "range": "stddev: 0.0063443882755095495",
            "extra": "mean: 4.154472199998812 msec\nrounds: 270"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 285.34470598822696,
            "unit": "iter/sec",
            "range": "stddev: 0.000413450010828289",
            "extra": "mean: 3.504533215490106 msec\nrounds: 297"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 255.98440938302392,
            "unit": "iter/sec",
            "range": "stddev: 0.004319700697222043",
            "extra": "mean: 3.906487908424617 msec\nrounds: 273"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 270.3049066672241,
            "unit": "iter/sec",
            "range": "stddev: 0.00035323447834923946",
            "extra": "mean: 3.699525888485306 msec\nrounds: 278"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 273.8191882199592,
            "unit": "iter/sec",
            "range": "stddev: 0.0038165760611862404",
            "extra": "mean: 3.6520450100695614 msec\nrounds: 298"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 244.6612886104889,
            "unit": "iter/sec",
            "range": "stddev: 0.0031774123850126035",
            "extra": "mean: 4.087283303702542 msec\nrounds: 270"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 258.08327932630937,
            "unit": "iter/sec",
            "range": "stddev: 0.0024182806785566563",
            "extra": "mean: 3.874718279349059 msec\nrounds: 247"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 244.36960417900818,
            "unit": "iter/sec",
            "range": "stddev: 0.00811313642900049",
            "extra": "mean: 4.092161966540935 msec\nrounds: 269"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 252.1876244336293,
            "unit": "iter/sec",
            "range": "stddev: 0.0023184633340137444",
            "extra": "mean: 3.9653016370086775 msec\nrounds: 281"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 237.09403068720746,
            "unit": "iter/sec",
            "range": "stddev: 0.003874473879785272",
            "extra": "mean: 4.217735879311429 msec\nrounds: 290"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 26.12707565513714,
            "unit": "iter/sec",
            "range": "stddev: 0.053076698555592834",
            "extra": "mean: 38.27447102000406 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 24.594991640985608,
            "unit": "iter/sec",
            "range": "stddev: 0.04617812343312201",
            "extra": "mean: 40.65868427999703 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 27.42121806447557,
            "unit": "iter/sec",
            "range": "stddev: 0.040046836227848825",
            "extra": "mean: 36.46811012000626 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 25.863428886902913,
            "unit": "iter/sec",
            "range": "stddev: 0.044005501050615764",
            "extra": "mean: 38.66463354000189 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 26.125531800865822,
            "unit": "iter/sec",
            "range": "stddev: 0.044687410432718996",
            "extra": "mean: 38.27673280001363 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 23.818586645638227,
            "unit": "iter/sec",
            "range": "stddev: 0.05182020860045887",
            "extra": "mean: 41.98401923999654 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 25.625083081006487,
            "unit": "iter/sec",
            "range": "stddev: 0.04256660355559966",
            "extra": "mean: 39.024263719995815 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 25.386594950439953,
            "unit": "iter/sec",
            "range": "stddev: 0.04612357013714",
            "extra": "mean: 39.39086758000485 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 23.133322291060168,
            "unit": "iter/sec",
            "range": "stddev: 0.05546201880152733",
            "extra": "mean: 43.22768633999658 msec\nrounds: 50"
          }
        ]
      }
    ]
  }
}