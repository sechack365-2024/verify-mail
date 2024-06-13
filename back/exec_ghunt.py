import subprocess
import sys

# コマンドライン引数を取得
arguments = sys.argv

# プログラム名を除く引数のみを取得
email = sys.argv[1]

# コマンドを実行して、出力を取得する
result = subprocess.run(['ghunt', 'email', email], capture_output=True, text=True)

# コマンドの標準出力
print(result.stdout)

# コマンドの標準エラー
print(result.stderr)